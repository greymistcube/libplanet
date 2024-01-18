window.BENCHMARK_DATA = {
  "lastUpdate": 1705548299368,
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
          "id": "b87a01ffd3acdc0d26e174a4b87d1bb88684d92f",
          "message": "Fixed Commit()",
          "timestamp": "2024-01-18T12:08:49+09:00",
          "tree_id": "955624126e980538bd20b8681af8b62bbb718d63",
          "url": "https://github.com/greymistcube/libplanet/commit/b87a01ffd3acdc0d26e174a4b87d1bb88684d92f"
        },
        "date": 1705547987429,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714059.1731770835,
            "unit": "ns",
            "range": "± 39486.351360006185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1249894.5787760417,
            "unit": "ns",
            "range": "± 29197.138615226937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767548.1879882812,
            "unit": "ns",
            "range": "± 3447.188352090645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946258.0072115385,
            "unit": "ns",
            "range": "± 2338.3717628113586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610664.2941545759,
            "unit": "ns",
            "range": "± 2218.6860960485265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580272.2272135416,
            "unit": "ns",
            "range": "± 825.6859147678201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2469235.6585365855,
            "unit": "ns",
            "range": "± 88977.17967029798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2606968.9215686275,
            "unit": "ns",
            "range": "± 97220.14348433008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3284410.0416666665,
            "unit": "ns",
            "range": "± 77873.82982272707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3005405.2710843375,
            "unit": "ns",
            "range": "± 159277.05490260347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7151215.457142857,
            "unit": "ns",
            "range": "± 232042.36843736138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39165.395833333336,
            "unit": "ns",
            "range": "± 4785.27043833287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201172.98039215687,
            "unit": "ns",
            "range": "± 8123.796591471739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199761.12068965516,
            "unit": "ns",
            "range": "± 8238.49161393624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173495.41666666666,
            "unit": "ns",
            "range": "± 2677.8544144802786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3115689.0714285714,
            "unit": "ns",
            "range": "± 38029.52974833006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2879490.1923076925,
            "unit": "ns",
            "range": "± 29718.910986622122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15716.958762886597,
            "unit": "ns",
            "range": "± 2824.046398482466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64295.83870967742,
            "unit": "ns",
            "range": "± 5375.375633568648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70772.56565656565,
            "unit": "ns",
            "range": "± 13813.914246860839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94873.3686868687,
            "unit": "ns",
            "range": "± 16378.703689358494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5973.69696969697,
            "unit": "ns",
            "range": "± 1678.942350838677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14423.670103092783,
            "unit": "ns",
            "range": "± 2250.044632527919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6137822.2,
            "unit": "ns",
            "range": "± 53171.24536841855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14719553.066666666,
            "unit": "ns",
            "range": "± 146638.59666173777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37761716.86666667,
            "unit": "ns",
            "range": "± 117340.96665387867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76401965.73333333,
            "unit": "ns",
            "range": "± 389295.83319693425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152895815.25,
            "unit": "ns",
            "range": "± 854996.8327831954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980918.7263157895,
            "unit": "ns",
            "range": "± 98920.46783884625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1915399.1785714286,
            "unit": "ns",
            "range": "± 53982.05303552186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1438263.7164948455,
            "unit": "ns",
            "range": "± 116560.71791830097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5732656,
            "unit": "ns",
            "range": "± 115308.80802385545"
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
          "id": "82760cbd4c2fbec0e46cb9fa61e43ed5e5ac6bb0",
          "message": "Changelog; linting",
          "timestamp": "2024-01-18T12:14:03+09:00",
          "tree_id": "3346d90600647c3f8c3ed1ca8491013d2dfb717d",
          "url": "https://github.com/greymistcube/libplanet/commit/82760cbd4c2fbec0e46cb9fa61e43ed5e5ac6bb0"
        },
        "date": 1705548292217,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3678439.744140625,
            "unit": "ns",
            "range": "± 28617.61127072391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1270158.6655273438,
            "unit": "ns",
            "range": "± 2544.6035708625213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772465.4718299279,
            "unit": "ns",
            "range": "± 829.1617234280626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924807.9798177083,
            "unit": "ns",
            "range": "± 7220.256969950172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617804.214468149,
            "unit": "ns",
            "range": "± 7366.446681957591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581511.0337727865,
            "unit": "ns",
            "range": "± 1080.1389754386366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2477104.023255814,
            "unit": "ns",
            "range": "± 91279.17999571383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510273.3205128205,
            "unit": "ns",
            "range": "± 123446.55987250913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3322161.966666667,
            "unit": "ns",
            "range": "± 98715.9479536015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3134477.878378378,
            "unit": "ns",
            "range": "± 156083.33849282953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6990190.66,
            "unit": "ns",
            "range": "± 162670.51245479824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38602.229166666664,
            "unit": "ns",
            "range": "± 4178.0114244361885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226246.898989899,
            "unit": "ns",
            "range": "± 16652.600389872892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226608.4375,
            "unit": "ns",
            "range": "± 8805.790543863373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171269.47619047618,
            "unit": "ns",
            "range": "± 4073.734903243553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3144377.4,
            "unit": "ns",
            "range": "± 39163.50508500046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2869218.153846154,
            "unit": "ns",
            "range": "± 35428.61030966864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14973.162921348314,
            "unit": "ns",
            "range": "± 2361.105071320227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72802.3350515464,
            "unit": "ns",
            "range": "± 12103.6658356057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90753.98484848485,
            "unit": "ns",
            "range": "± 2875.3008986149184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92308.3125,
            "unit": "ns",
            "range": "± 15911.273646008289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7233.021052631579,
            "unit": "ns",
            "range": "± 678.2513495519879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23526.38,
            "unit": "ns",
            "range": "± 4318.685725958299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5681561.233333333,
            "unit": "ns",
            "range": "± 68437.05929274061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14940653.8,
            "unit": "ns",
            "range": "± 130576.07223716646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37045622.2,
            "unit": "ns",
            "range": "± 156301.81646517833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76432205.38461539,
            "unit": "ns",
            "range": "± 502716.08443841315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151640750.58333334,
            "unit": "ns",
            "range": "± 653288.446621532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995147.4479166666,
            "unit": "ns",
            "range": "± 102793.31492167538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1997772.14,
            "unit": "ns",
            "range": "± 80504.7953100222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1458924.6956521738,
            "unit": "ns",
            "range": "± 107272.8265678797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5630936.571428572,
            "unit": "ns",
            "range": "± 157395.72262375485"
          }
        ]
      }
    ]
  }
}