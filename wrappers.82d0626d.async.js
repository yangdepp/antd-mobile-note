(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"9kvl":function(e,n,t){"use strict";t.d(n,"a",(function(){return o["b"]}));var o=t("FfOG");t("bCY9"),t("Fghh"),t("k1fw"),t("qVdP"),t("jsC+"),t("0Owb"),t("PpiC"),t("q1tI")},afA6:function(e,n,t){"use strict";t.r(n);var o=t("0Owb"),r=t("q1tI"),a=t.n(r),s=t("q3YX"),i=t("9og8"),l=t("WmNS"),c=t.n(l),u=t("rlch"),p="import { antdm } from 'antd-mobile-note';\nimport React from 'react';\nconst { Boo } = antdm;\n\nexport default () => <Boo title=\"antdm Boo1\" />;",m="import { Space } from 'antd';\nimport { tools } from 'antd-mobile-note';\nimport React, { ReactNode, useState } from 'react';\n\nimport { mockAsyncFetchData } from '../../../utils/mock';\n\nconst { AsyncSelect } = tools;\n\ntype ValueType = {\n  value: number;\n  label: ReactNode;\n};\n\nexport default () => {\n  const [value, setValue] = useState<number>();\n\n  const handleChange = (value: number) => {\n    console.log(`\u9009\u62e9\u4e86${value}`);\n    setValue(value);\n  };\n\n  return (\n    <>\n      <Space>\n        <AsyncSelect\n          value={value}\n          style={{ width: 120 }}\n          placeholder=\"\u8f7b\u70b9\u6211\"\n          request={async () => {\n            const res = await mockAsyncFetchData<ValueType>({ delay: 1000 });\n            const { data } = res || {};\n            return data;\n          }}\n          onChange={handleChange}\n        />\n      </Space>\n    </>\n  );\n};",d="/**\n * @param options: <T>[], @param delay: number\n * @returns Promise<{data: T[]}>\n */\nimport { mergeProps } from './with-default-props';\n\nconst defaultOptions: any = [\n  {\n    label: '\u5c0f\u660e \ud83d\udc66\ud83c\udffb',\n    value: 1,\n  },\n  {\n    label: '\u5c0f\u7ea2 \ud83d\udc67\ud83c\udffb',\n    value: 2,\n  },\n  {\n    label: '\u5c0f\u4e11 \ud83e\udd21',\n    value: 3,\n  },\n];\n\ntype ResponseType = 'success' | 'fail' | 'random';\n\nconst defaultProps = {\n  delay: 1000,\n  options: defaultOptions,\n  responseType: 'success',\n};\n\nconst mockAsyncFetchData = <T>(props: {\n  delay: number;\n  options?: T[];\n  responseType?: ResponseType;\n}): Promise<{ data: T[] }> => {\n  const { delay: d, options: o, responseType: r } = mergeProps(defaultProps, props);\n  console.log('\u6570\u636e\u8bf7\u6c42\u4e2d...');\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (r === 'fail') {\n        reject(new Error('\u8bf7\u6c42\u9519\u8bef'));\n      }\n      if (r === 'success') {\n        resolve({\n          data: o,\n        });\n      }\n      if (r === 'random') {\n        Math.random() > 0.5\n          ? resolve({\n              data: o,\n            })\n          : reject(new Error('\u8bf7\u6c42\u9519\u8bef'));\n      }\n      console.log('\u6570\u636e\u8bf7\u6c42\u7ed3\u675f...');\n    }, d);\n  });\n};\n\nexport { mockAsyncFetchData };",f="import assign from 'lodash/assign';\nimport assignWith from 'lodash/assignWith';\nimport isUndefined from 'lodash/isUndefined';\n\nexport function mergeProps<A, B>(a: A, b: B): B & A;\nexport function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A;\nexport function mergeProps(...items: any[]) {\n  function customizer(objValue: any, srcValue: any) {\n    return isUndefined(srcValue) ? objValue : srcValue;\n  }\n\n  let ret = assign({}, items[0]);\n  for (let i = 1; i < items.length; i++) {\n    ret = assignWith(ret, items[i], customizer);\n  }\n  return ret;\n}",h='import { Form, Input } from \'antd\';\nimport { tools } from \'antd-mobile-note\';\nimport React from \'react\';\n\nconst { QueryFilter } = tools;\n\nexport default () => {\n  const onFinish = (values: any) => {\n    console.log(values);\n  };\n\n  return (\n    <>\n      <QueryFilter onFinish={onFinish} labelWidth={50}>\n        <Form.Item label="\u540d\u5b57" name="name">\n          <Input placeholder="\u8bf7\u8f93\u5165\u540d\u5b57" />\n        </Form.Item>\n        <Form.Item label="\u5e74\u9f84" name="age">\n          <Input placeholder="\u8bf7\u8f93\u5165\u5e74\u9f84" />\n        </Form.Item>\n      </QueryFilter>\n    </>\n  );\n};',b={"boo-demo1":{component:Object(u["c"])({loader:function(){var e=Object(i["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(5)]).then(t.bind(null,"ohoj"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"17.0.2"}},componentName:"boo",identifier:"boo-demo1"}},"async-select-demo1":{component:Object(u["c"])({loader:function(){var e=Object(i["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(11),t.e(4)]).then(t.bind(null,"nigo"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m},"utils/mock.ts":{import:"../../../utils/mock",content:d},"utils/with-default-props.tsx":{import:"./with-default-props",content:f}},dependencies:{antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},lodash:{version:"4.17.21"}},identifier:"async-select-demo1"}},"query-filter-demo1":{component:Object(u["c"])({loader:function(){var e=Object(i["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(11),t.e(4)]).then(t.bind(null,"P+kI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"query-filter-demo1"}}},y=t("x2v5"),v=t("KcUY"),g=t.n(v);n["default"]=e=>a.a.createElement(g.a,Object(o["a"])({},e,{config:s,demos:b,apis:y}))},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/note":[{"title":"antd-design-mobile","path":"/note/antd-design-mobile","meta":{"order":1},"children":[{"path":"/note/antd-design-mobile/boo","title":"Boo \u7ec4\u4ef6","meta":{"order":1}}]},{"title":"\u5de5\u5177\u65b9\u6cd5","path":"/note/tools","meta":{"order":2},"children":[{"path":"/note/tools/async-select","title":"AsyncSlect \u5f02\u6b65\u9009\u62e9\u5668","meta":{"order":1}},{"path":"/note/tools/query-filter","title":"QueryFilter \u7b5b\u9009\u8868\u5355","meta":{"order":2}}]}],"*":[{"path":"/","title":"\u7b14\u8bb0","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u7b14\u8bb0","path":"/note"},{"title":"GitHub","path":"https://github.com/yangdepp/antd-mobile-note"}]},"title":"antd-mobile-note","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{"hd":{"rules":[]}}}')},x2v5:function(e){e.exports=JSON.parse("{}")}}]);