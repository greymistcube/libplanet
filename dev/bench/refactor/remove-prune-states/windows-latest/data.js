window.BENCHMARK_DATA = {
  "lastUpdate": 1705571962900,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "93d8326c18a2645b78951215485e432d2447f372",
          "message": "Removed IStateStore.PruneStates()",
          "timestamp": "2024-01-18T18:43:16+09:00",
          "tree_id": "13ba707ced2bbac5cac8e6e607cd96971834bd13",
          "url": "https://github.com/greymistcube/libplanet/commit/93d8326c18a2645b78951215485e432d2447f372"
        },
        "date": 1705571703905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946716.8421052631,
            "unit": "ns",
            "range": "± 96325.6860781809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1679634.6153846155,
            "unit": "ns",
            "range": "± 61186.87506517495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1302130.303030303,
            "unit": "ns",
            "range": "± 105011.46725967448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5098000,
            "unit": "ns",
            "range": "± 151990.12161639164"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33991.836734693876,
            "unit": "ns",
            "range": "± 1359.5092151664323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5108440,
            "unit": "ns",
            "range": "± 44963.26754775979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13453835.714285715,
            "unit": "ns",
            "range": "± 155891.74674528703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32862992.85714286,
            "unit": "ns",
            "range": "± 249185.29239314055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66795800,
            "unit": "ns",
            "range": "± 1182824.0613041315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128849780,
            "unit": "ns",
            "range": "± 866543.4011057958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350927.0368303573,
            "unit": "ns",
            "range": "± 8449.769799839682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086328.0078125,
            "unit": "ns",
            "range": "± 3378.184816504648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762746.0588727678,
            "unit": "ns",
            "range": "± 3204.0138693181043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911351.015625,
            "unit": "ns",
            "range": "± 4941.0556809623795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603255.4817708334,
            "unit": "ns",
            "range": "± 1570.5389066984012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571942.5260416666,
            "unit": "ns",
            "range": "± 1661.1502788549499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2147817.6470588236,
            "unit": "ns",
            "range": "± 68705.08106386944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257878.787878788,
            "unit": "ns",
            "range": "± 68205.80417739277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2756478.5714285714,
            "unit": "ns",
            "range": "± 44516.77606979589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2888550,
            "unit": "ns",
            "range": "± 33247.642236491214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5940640.740740741,
            "unit": "ns",
            "range": "± 164209.45643916362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167534.4262295082,
            "unit": "ns",
            "range": "± 7034.104663374048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159949.25373134328,
            "unit": "ns",
            "range": "± 7607.6590819628755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138900,
            "unit": "ns",
            "range": "± 4772.674413013272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2673850,
            "unit": "ns",
            "range": "± 50300.31146358175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2533783.3333333335,
            "unit": "ns",
            "range": "± 44311.00583484015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9271.084337349397,
            "unit": "ns",
            "range": "± 631.7861093142373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49526.37362637363,
            "unit": "ns",
            "range": "± 3517.6960630767394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43291.48936170213,
            "unit": "ns",
            "range": "± 1609.3247013730897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56674.489795918365,
            "unit": "ns",
            "range": "± 12504.508970062323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2357.216494845361,
            "unit": "ns",
            "range": "± 354.2149249515319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10453.191489361701,
            "unit": "ns",
            "range": "± 1707.5072775020578"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "8eb0b14be7fd75d992cc66c2804255634511bb9e",
          "message": "Changelog",
          "timestamp": "2024-01-18T18:46:04+09:00",
          "tree_id": "05f426243e74952e5002224a4fb35d5dabe69e4c",
          "url": "https://github.com/greymistcube/libplanet/commit/8eb0b14be7fd75d992cc66c2804255634511bb9e"
        },
        "date": 1705571935425,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982962.1052631579,
            "unit": "ns",
            "range": "± 95627.47889035335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1762758.6956521738,
            "unit": "ns",
            "range": "± 63603.77199187328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1392237.1134020619,
            "unit": "ns",
            "range": "± 90689.26034311205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5296689.189189189,
            "unit": "ns",
            "range": "± 176683.8714637967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35884.444444444445,
            "unit": "ns",
            "range": "± 2690.929880259686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5192993.333333333,
            "unit": "ns",
            "range": "± 55565.89995757505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13638726.666666666,
            "unit": "ns",
            "range": "± 216951.2962680356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33525506.666666668,
            "unit": "ns",
            "range": "± 400769.69422540395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67884607.14285715,
            "unit": "ns",
            "range": "± 634272.8076785569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135426623.07692307,
            "unit": "ns",
            "range": "± 1445860.72182734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3375900.5208333335,
            "unit": "ns",
            "range": "± 17632.88647954849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077874.384014423,
            "unit": "ns",
            "range": "± 4082.004346039787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 861284.4075520834,
            "unit": "ns",
            "range": "± 1844.7964122666356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945554.771205357,
            "unit": "ns",
            "range": "± 7942.723905053689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640505.9361049107,
            "unit": "ns",
            "range": "± 1329.619355025134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564449.2047991072,
            "unit": "ns",
            "range": "± 1585.3128056973317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185661.4285714286,
            "unit": "ns",
            "range": "± 71551.42852780611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2447750,
            "unit": "ns",
            "range": "± 41643.26060536271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2823306.8181818184,
            "unit": "ns",
            "range": "± 99378.79938087791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2636919.696969697,
            "unit": "ns",
            "range": "± 123069.23251030693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6226522.222222222,
            "unit": "ns",
            "range": "± 170305.08220731706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180828.30188679244,
            "unit": "ns",
            "range": "± 6353.659677046539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170020.6349206349,
            "unit": "ns",
            "range": "± 7659.764140438528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140060.86956521738,
            "unit": "ns",
            "range": "± 3453.4224303165456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2737413.3333333335,
            "unit": "ns",
            "range": "± 46653.59987131091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2457760,
            "unit": "ns",
            "range": "± 72855.49987522539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12150,
            "unit": "ns",
            "range": "± 1145.1837333513474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59964.13043478261,
            "unit": "ns",
            "range": "± 6232.942993195604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47480.41237113402,
            "unit": "ns",
            "range": "± 3711.2059802951776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65627.8350515464,
            "unit": "ns",
            "range": "± 14884.672921247164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2921.505376344086,
            "unit": "ns",
            "range": "± 591.7640287577899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11268.131868131868,
            "unit": "ns",
            "range": "± 1196.7436484875784"
          }
        ]
      }
    ]
  }
}