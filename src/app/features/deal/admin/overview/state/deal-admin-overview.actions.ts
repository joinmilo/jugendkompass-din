import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_DealEntity } from 'src/app/core/api/generated/schema';

export const DealAdminOverviewActions = createActionGroup({
  source: 'Deal Admin Overview',
  events: {

    'set overview data': (deals: PageableList_DealEntity) => ({ deals }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});