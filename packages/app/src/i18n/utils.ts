type Primitive = string | boolean | number | null | undefined;

export type MapLeafNodes<Obj, LeafType> = {
  [Prop in keyof Obj]: Obj[Prop] extends Primitive
    ? LeafType
    : Obj[Prop] extends Record<string | number, any> // eslint-disable-line @typescript-eslint/no-explicit-any
    ? MapLeafNodes<Obj[Prop], LeafType>
    : never;
};
