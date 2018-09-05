<template>
  <div>
    <content-header></content-header>
    <div>
      <div class="left-tab"></div>
      <div class="right-pad">
        <Row class="p-t-10">
          <i-Col span="20" offset="4">
            <Card title="我的工作项">
              <div>
                <div class="table-form">
                    <span>
                     名称<Input class="table-form" v-model="name" size="small"/>
                      </span>

                  <span>
                      状态<Input class="table-form" size="small"/>
                    </span>
                  <span>
                      所属项目<Input class="table-form" v-model="id" size="small"/>
                    </span>
                  <span>
                      ID<Input class="table-form" v-model="id" size="small"/>
                    </span>
                  <span>
                      分配给<Input class="table-form" v-model="id" size="small"/>
                    </span>
                  <span>
                      创建人<Input class="table-form" v-model="id" size="small"/>
                    </span>
                  <span>
                      创建时间<Input class="table-form" v-model="id" size="small"/>
                    </span>
                  <span>
                      更新时间<Input class="table-form" v-model="id" size="small"/>
                    </span>
                </div>
                <Col offset="20">
                  <Button offset="20" type="primary" icon="ios-search"
                      class="m-10">Search</Button>
                </Col>

              </div>

              <Table border :columns="columns" :data="data"></Table>
              <div>
                <ul v-for="page in pagecounts">
                  <li>{{page}}page</li>
                </ul>
              </div>
            </Card>
          </i-Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from './content-header.vue'
import { Myworks } from '@/api/data'

export default {
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ],
      pagecounts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ]
    }
  },
  components: {
    ContentHeader
  },
  methods: {
    get_myworks: function () {
      Myworks().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

  .table-form .ivu-input {
    width: 200px;
  }

  .table-form .ivu-input-wrapper {
    display: inline;
    display: -moz-inline-box;
  }

  .table-form span {
    display: inline-block;
    display: -moz-inline-box;
    width: 300px;
    padding-top: 5px;
  }

</style>
