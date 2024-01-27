/** Mapper from DTO to model. */
export interface IMapperFromDto<TDto, TModel> {

  /** Maps DTO to model. */
  fromDto(dto: TDto): TModel;
}

/** Mapper from model to DTO. */
export interface IMapperToDto<TDto, TModel> {

  /** Maps model to DTO. */
  toDto(data: TModel): TDto;
}

/** Mapper. */
export interface IMapper<TDto, TModel>
extends IMapperFromDto<TDto, TModel>, IMapperToDto<TDto, TModel> {
}
