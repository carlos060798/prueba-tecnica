import { Request, Response } from "express";
import  AppDataSource  from "../migration/data-source";
import Photo  from "../entity/photo"
import  {PhotoMetadata}  from "../entity/metadata"

import { Repository } from "typeorm";

export class PhotoController {
  private photoRepo: Repository<Photo>;
  private metadataRepo: Repository<PhotoMetadata>;

  constructor() {
    this.photoRepo = AppDataSource.getRepository(Photo);
    this.metadataRepo = AppDataSource.getRepository(PhotoMetadata);
  }

  /**
   * Obtener todas las fotos con paginación y filtrado opcional
   */
  async getPhotos(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = req.query.search as string | undefined;

      const queryBuilder = this.photoRepo.createQueryBuilder("photo");

      if (search) {
        queryBuilder.where("photo.name LIKE :search", { search: `%${search}%` });
      }

      const [photos, total] = await queryBuilder.skip((page - 1) * limit).take(limit).getManyAndCount();

      res.status(200).json({
        total,
        page,
        limit,
        data: photos,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener fotos" });
    }
  }

  /**
   * Crear una nueva foto
   */
  async createPhoto(req: Request, res: Response) {
    try {
      const { name, description, filename, views, isPublished } = req.body;
      const newPhoto = this.photoRepo.create({ name, description, filename, views, isPublished });
      await this.photoRepo.save(newPhoto);
      res.status(201).json(newPhoto);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Error al crear la foto", error });
    }
  }

  /**
   * Obtener una foto por ID
   */
  async getPhotoById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const photo = await this.photoRepo.findOne({ where: { id } });
      if (!photo) return res.status(404).json({ error: "Foto no encontrada" });
      res.json(photo);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la foto" });
    }
  }

  /**
   * Actualizar una foto
   */
  async updatePhoto(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await this.photoRepo.update(id, req.body);
      const updatedPhoto = await this.photoRepo.findOne({ where: { id } });
      if (!updatedPhoto) return res.status(404).json({ error: "Foto no encontrada" });
      res.json(updatedPhoto);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la foto" });
    }
  }

  /**
   * Eliminar una foto
   */
  async deletePhoto(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await this.photoRepo.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la foto" });
    }
  }

  /**
   * Obtener los metadatos de una foto
   */
  async getPhotoMetadata(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const metadata = await this.metadataRepo.findOne({ where: { photo: { id } }, relations: ["photo"] });
      if (!metadata) return res.status(404).json({ error: "Metadatos no encontrados" });
      res.json(metadata);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener metadatos" });
    }
  }

  /**
   * Obtener todas las metadatas con paginación y filtrado opcional
   */
  async getMetadatas(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const queryBuilder = this.metadataRepo.createQueryBuilder("metadata");

      const [metadatas, total] = await queryBuilder.skip((page - 1) * limit).take(limit).getManyAndCount();

      res.status(200).json({
        total,
        page,
        limit,
        data: metadatas,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener metadatas" });
    }
  }

  /**
   * Crear una nueva metadata
   */
  async createMetadata(req: Request, res: Response) {
    try {
      const { height, width, orientation, compressed, comment, photoId } = req.body;
      const photo = await this.photoRepo.findOne({ where: { id: photoId } });
      if (!photo) return res.status(404).json({ error: "Foto no encontrada" });

      const newMetadata = this.metadataRepo.create({ height, width, orientation, compressed, comment, photo });
      await this.metadataRepo.save(newMetadata);
      res.status(201).json(newMetadata);
    } catch (error) {
      res.status(500).json({ error: "Error al crear metadata" });
    }
  }
}
