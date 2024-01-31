/** Mapper from DTO to model. */
export type IMapperFromDto<TDto, TModel> = {

  /** Maps DTO to model. */
  fromDto(dto: TDto): TModel;
};

/** Mapper from model to DTO. */
export type IMapperToDto<TDto, TModel> = {

  /** Maps model to DTO. */
  toDto(data: TModel): TDto;
};

/** Mapper. */
export type IMapper<TDto, TModel> = IMapperFromDto<TDto, TModel> & IMapperToDto<TDto, TModel>;
