<template>
  <a-table :columns="columns" :data-source="dataSource" bordered :scroll="{x: 576}">
    <template #bodyCell="{ column, text, record }">
      <template v-if="['name', 'STT', 'address'].includes(column.dataIndex)">
        <div>
          <a-input v-if="editableData[record.key]" v-model:value="editableData[record.key][column.dataIndex]"
            style="margin: -5px 0" />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <button
              class="relative mr-3 px-6 py-1 rounded-md bg-white isolation-auto z-10 border-2 border-blue-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">

              <a class="text-black" @click="save(record.key)">Save</a>
            </button>
            <a-popconfirm title="Xác nhận hủy?" @confirm="cancel(record.key)" class="z-0">
              <button
                class="relative px-6 py-1 rounded-md bg-white isolation-auto z-10 border-2 border-blue-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">

                <a>Cancel</a>
              </button>
            </a-popconfirm>
          </span>
          <span v-else>
            <button
              class="relative px-6 py-1 rounded-md bg-white isolation-auto z-10 border-2 border-blue-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
              <a @click=" edit(record.key)">Sửa</a></button>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
  import { cloneDeep } from 'lodash-es';
  import { reactive, ref } from 'vue';
  import type { UnwrapRef } from 'vue';
  
  const columns = [
    
    {
      title: 'STT',
      dataIndex: 'STT',
      width: '15%',
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
    },
  ];
  interface DataItem {
    key: string;
    name: string;
    age: number;
    address: string;
  }
  const data: DataItem[] = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      key: i.toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  
  const dataSource = ref(data);
  const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});
  
  const edit = (key: string) => {
    editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
  };
  const save = (key: string) => {
    Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
    delete editableData[key];
  };
  const cancel = (key: string) => {
    delete editableData[key];
  };
  </script>
<style >
  .editable-row-operations a {
    margin-right: 8px;
  }
  button, [type='button'], [type='reset'], [type='submit'] {
  
    background-color: rgba(92, 109, 205, 0);
}
:where(.css-dev-only-do-not-override-1qb1s0s).ant-btn-primary {
  background-color: rgba(0, 102, 255, 0.774);
}
  </style>