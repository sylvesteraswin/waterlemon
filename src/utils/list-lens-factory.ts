import { lens } from "ramda";
import { GQEdges } from "./gq-types";

function listLensFactory<T>() {
  return lens<GQEdges<T>, T[], T>(
    (a) => a.edges && a.edges.map((b) => b.node),
    (a) => ({ edges: a && a.map((b) => ({ node: b })) } as any)
  );
}

export default listLensFactory;
