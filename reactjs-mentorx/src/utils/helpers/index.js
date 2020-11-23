import _ from "lodash";

export function getFilter([categories, cate, size, order]) {
  let categories_like = categories && `categories=${categories}&`;
  let cate_like = cate && `cate_like=${cate}&`;
  let size_like = size && `size_like=${size}&`;
  let sort =
    order &&
    `_sort=price&_order=${order === "Price: Ascending" ? "asc" : "desc"}`;
  return `?${categories_like}${cate_like}${size_like}${sort}`;
}

export function getPag([_page, _limit]) {
  let page = _page && _limit && `_page=${_page}&_limit=${_limit}`;
  return `?${page}&`;
}

export function calcSum(object) {
  return _.sumBy(object, (item) => item["price"] * item["count"]);
}