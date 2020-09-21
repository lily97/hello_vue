// 购物车页面
<template>
  <div>
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="cart">
      <div class="container">
        <div class="list">
          <div class="table">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%;height:460px; overflow-y: scroll;"
              @selection-change="handleSelectionChange"
              header-row-class-name="titleName"
              :cell-style="cellStyle"
            >
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column
                prop="tradeName"
                label="商品名称"
                align="center"
                width="400"
                show-overflow-tooltip
              ></el-table-column>
              <el-table-column
                prop="price"
                label="单价"
                align="center"
                width="200"
                :formatter="formatPrice"
              ></el-table-column>
              <el-table-column prop="number" label="数量" align="center" width="180"></el-table-column>
              <el-table-column
                prop="subTotal"
                label="小计"
                align="center"
                width="200"
                :formatter="subTotal"
              ></el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleDelete(scope.$index, scope.row)"
                    class="el-icon-close"
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="body"></div>
        </div>
        <div class="pay">
          <div class="info">
            <span class="bar-1">继续购物</span>
            <span class="bar-2">
              共
              <span>{{sumCommodity}}</span>件商品，已选择
              <span>{{selCommodity}}</span>件
            </span>
          </div>
          <div>
            <span class="bar-3">
              合计：
              <span class="price">{{sumPrice}}</span>元
            </span>
            <a class="btn btn-large" @click="settlement">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFooter";
import ServiceBar from "./../components/ServiceBar";
export default {
  name: "index",
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar,
  },
  data() {
    return {
      sumPrice: 0,
      selCommodity: 0,
      checked: true,
      tableData: [
        {
          id: "001",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 5767,
          number: 2,
        },
        {
          id: "002",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 3546,
          number: 2,
        },
        {
          id: "003",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 1659,
          number: 2,
        },
        {
          id: "004",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 1999,
          number: 2,
        },
        {
          id: "005",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 7756,
          number: 2,
        },
        {
          id: "006",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 5767,
          number: 2,
        },
        {
          id: "007",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 3546,
          number: 2,
        },
        {
          id: "008",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 1659,
          number: 2,
        },
        {
          id: "009",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 1999,
          number: 2,
        },
        {
          id: "010",
          tradeName: "小米8 6GB 全息幻彩紫 64GB",
          price: 7756,
          number: 2,
        },
      ],
    };
  },
  mounted() {
    this.handleSelectionChange();
    this.cellStyle();
  },
  methods: {
    handleSelectionChange(val) {
      if (val) {
        this.selCommodity = val.length;
        this.sumPrice = 0;
        for (let i = 0; i < val.length; i++) {
          this.sumPrice += val[i]["price"] * val[i]["number"];
        }
      }

      this.multipleSelection = val;
    },
    formatPrice(row) {
      return row["price"] + "元";
    },
    subTotal(row) {
      var sum = row["price"] * row["number"];
      return sum + "元";
    },
    cellStyle(row) {
      if (row) {
        if (row.columnIndex == 4) {
          return "color: #ff6600;font-size: 16px;";
        } else if (row.columnIndex == 2) {
          return "font-size: 16px;";
        } else if (row.columnIndex == 1) {
          return "font-size: 18px;";
        }
      }
    },
    handleDelete(index, row) {
      var id = row["id"];
      var arr = this.tableData;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]["id"] == id) {
          arr.splice(i, 1);
        }
      }
    },
    settlement() {
      if (this.selCommodity == 0) {
        this.$alert("至少选择一件商品！", "提示", {
          confirmButtonText: "确定",
        });
      }
    },
  },
  computed: {
    // 计算属性的 getter
    // sum: function () {
    //   // `this` 指向 vm 实例
    //   let array = this.tableData;
    //   let sumPrice = 0;
    //   for (let index = 0; index < array.length; index++) {
    //     sumPrice += array[index]["price"] * array[index]["number"];
    //   }
    //   return sumPrice;
    // },
    sumCommodity: function () {
      return this.tableData.length;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/button.scss";

.cart {
  height: 616px;
  background-color: #f5f5f5;
  .container {
    padding-top: 30px;
    .list {
      height: 460px;
      background: #ffffff;
      .table {
        padding: 0 0 0 25px;
        /deep/.titleName {
          font-size: 14px;
          color: #666666;
        }
        //滚动条的宽度
        ::-webkit-scrollbar {
          width: 10px;
        }
        //滚动条的滑块
        ::-webkit-scrollbar-thumb {
          background-color: #a1a3a9;
          border-radius: 3px;
        }
      }
    }
    .pay {
      margin-top: 20px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      .info {
        padding-top: 15px;
      }
      div {
        display: inline;
      }
      span {
        display: inline-block;
      }
      .bar-1 {
        width: 80px;
        color: #666666;
        border-right: 1px solid #e5e5e5;
      }
      .bar-2 {
        margin-left: 30px;
        color: #666666;
        span {
          color: #ff6700;
          padding: 0 5px 0 5px;
        }
      }
      .bar-3 {
        color: #ff6700;
        margin-right: 20px;
        .price {
          font-size: 24px;
        }
      }
    }
  }
}
</style>