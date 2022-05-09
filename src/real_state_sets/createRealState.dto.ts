import { District } from "./entity/district.entity";
import { TypeRealState } from "./entity/typeRealState.entity";

export class RealStateDto {
  readonly name: string;
  readonly type: number;
  readonly id_cou: number;
  readonly priority: number;
  readonly register_source: string;
  type_real_state: TypeRealState;
  district: District;
  readonly id_mae: number;
  readonly holders_count: number;

}
