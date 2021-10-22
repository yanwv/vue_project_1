import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Message, Container,
  Header, Aside, Main, Menu, Submenu, MenuItem, Breadcrumb,
  BreadcrumbItem, Card, Row, Col, Table, TableColumn, Switch,
  Tooltip, Pagination, Dialog, MessageBox, Tag, Tree, Select,
  Option, Cascader, Alert, Tabs, TabPane, Step, Steps, Checkbox,
  CheckboxGroup, Upload, Timeline, TimelineItem
} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Option)
Vue.use(Select)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Step)
Vue.use(Steps)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(Timeline)
Vue.use(TimelineItem)

// 全局挂载
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm