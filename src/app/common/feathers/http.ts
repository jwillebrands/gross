import { Page, PageOffset } from "../service/paging";

export interface PageDto<T> {
    data: T[];
    total: number;
    skip: number;
    limit: number;
}

export const unmarshalPage = <T>(dto: PageDto<T>): Page<T> => {
    return new Page(
        new PageOffset(dto.skip / dto.limit, dto.limit),
        dto.data,
        dto.total
    );
}
