import { News } from "../data";
import { PaginationMeta } from "../pagination-meta";

/**
 * Interface for paginated news response
 */
export interface PaginatedNewsResponse extends PaginationMeta {
  data: News[];
}
