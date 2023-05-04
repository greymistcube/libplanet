window.BENCHMARK_DATA = {
  "lastUpdate": 1683188043557,
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
          "id": "3a5c9a2204574574a02c1ec799a1e3f6b2885b5e",
          "message": "Added test",
          "timestamp": "2023-05-04T16:54:14+09:00",
          "tree_id": "f3fcd1efcc43b9616c4dce4595871a2f85485482",
          "url": "https://github.com/greymistcube/libplanet/commit/3a5c9a2204574574a02c1ec799a1e3f6b2885b5e"
        },
        "date": 1683187827815,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8361119.352941177,
            "unit": "ns",
            "range": "± 264884.60838967306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21017486.28846154,
            "unit": "ns",
            "range": "± 842792.902794813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52773519.72727273,
            "unit": "ns",
            "range": "± 1092139.2354882897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102294313.35714285,
            "unit": "ns",
            "range": "± 1688147.3142624823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215608460.7,
            "unit": "ns",
            "range": "± 3780190.19441755"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65126.6129032258,
            "unit": "ns",
            "range": "± 7473.130512233489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331073.8333333333,
            "unit": "ns",
            "range": "± 22601.55572576007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321486.48913043475,
            "unit": "ns",
            "range": "± 26571.32273690739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290151,
            "unit": "ns",
            "range": "± 14223.128291426123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4229704.268292683,
            "unit": "ns",
            "range": "± 152275.56074778124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3755185.411764706,
            "unit": "ns",
            "range": "± 74486.7156327714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18260.4,
            "unit": "ns",
            "range": "± 1697.1238644353439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93476.32291666667,
            "unit": "ns",
            "range": "± 10637.376600305755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98550.16233766233,
            "unit": "ns",
            "range": "± 4791.559592852034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115361.4375,
            "unit": "ns",
            "range": "± 14747.987123181465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6765.688172043011,
            "unit": "ns",
            "range": "± 572.8161359628832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18430.945652173912,
            "unit": "ns",
            "range": "± 1876.217719530383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654544.587628866,
            "unit": "ns",
            "range": "± 174643.11996526853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3048248.8289473685,
            "unit": "ns",
            "range": "± 154405.76341275935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2641954.7422680412,
            "unit": "ns",
            "range": "± 241115.93794532912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6928941.48,
            "unit": "ns",
            "range": "± 466858.40662567085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3329663.447368421,
            "unit": "ns",
            "range": "± 109707.71688388896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3446938.236842105,
            "unit": "ns",
            "range": "± 175164.10342920292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4422222.894736842,
            "unit": "ns",
            "range": "± 150359.81493494997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4499613,
            "unit": "ns",
            "range": "± 207132.14677729632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7993652.661016949,
            "unit": "ns",
            "range": "± 352354.57932074176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6673637.055729167,
            "unit": "ns",
            "range": "± 82688.51729926861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2075051.3682291666,
            "unit": "ns",
            "range": "± 31328.387627977274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1274396.4500558036,
            "unit": "ns",
            "range": "± 5080.508499987304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2514572.48046875,
            "unit": "ns",
            "range": "± 13290.483961223466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855431.316015625,
            "unit": "ns",
            "range": "± 4945.834450699549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738445.7251674107,
            "unit": "ns",
            "range": "± 4334.413337529775"
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
          "id": "82c2810beda849f7b86f0b5b2a1801929f61891b",
          "message": "Changelog",
          "timestamp": "2023-05-04T16:58:06+09:00",
          "tree_id": "b1f02694d62073f9fb59d608a5c2a8b1ae63bba1",
          "url": "https://github.com/greymistcube/libplanet/commit/82c2810beda849f7b86f0b5b2a1801929f61891b"
        },
        "date": 1683188014141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7684261.692307692,
            "unit": "ns",
            "range": "± 93744.67682610446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19285447.466666665,
            "unit": "ns",
            "range": "± 342632.7153641901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49574986.961538464,
            "unit": "ns",
            "range": "± 1334623.016371057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98886203.74074075,
            "unit": "ns",
            "range": "± 4126850.5887558027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198637485.95,
            "unit": "ns",
            "range": "± 4365018.773961007"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66326.76530612246,
            "unit": "ns",
            "range": "± 8758.710682257117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347908.62637362635,
            "unit": "ns",
            "range": "± 19469.573993883296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340252.6951219512,
            "unit": "ns",
            "range": "± 12028.683448780901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337999.884057971,
            "unit": "ns",
            "range": "± 15894.686621946626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4278562.642857143,
            "unit": "ns",
            "range": "± 97790.8384253278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3801038.1136363638,
            "unit": "ns",
            "range": "± 142391.28190751656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23162.371134020617,
            "unit": "ns",
            "range": "± 3564.6992285452943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90564.94897959183,
            "unit": "ns",
            "range": "± 9974.97001765119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93101.57,
            "unit": "ns",
            "range": "± 14374.207644217851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106110.46774193548,
            "unit": "ns",
            "range": "± 11395.369603532921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6180.631578947368,
            "unit": "ns",
            "range": "± 1183.7114284320617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18924.236842105263,
            "unit": "ns",
            "range": "± 3391.3424669124083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1593014.8232323232,
            "unit": "ns",
            "range": "± 172436.43854965916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2865334.269230769,
            "unit": "ns",
            "range": "± 117978.7795061859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2435187.9583333335,
            "unit": "ns",
            "range": "± 146445.71737361228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6680095.159574468,
            "unit": "ns",
            "range": "± 378756.0785993018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3241251.033333333,
            "unit": "ns",
            "range": "± 139819.94260245856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3385755.3253968256,
            "unit": "ns",
            "range": "± 154697.11230602808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4353119.7549019605,
            "unit": "ns",
            "range": "± 176744.30498557433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4297083.6486486485,
            "unit": "ns",
            "range": "± 138037.22250381438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7608632.132075472,
            "unit": "ns",
            "range": "± 314774.95576406753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6832273.8984375,
            "unit": "ns",
            "range": "± 38461.215772184085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926854.1307091345,
            "unit": "ns",
            "range": "± 10918.327761238139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289124.87109375,
            "unit": "ns",
            "range": "± 5898.37097177349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2462324.2483258927,
            "unit": "ns",
            "range": "± 15487.707842619304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838462.2153645833,
            "unit": "ns",
            "range": "± 4446.762610870668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736614.3935546875,
            "unit": "ns",
            "range": "± 1298.5737159610312"
          }
        ]
      }
    ]
  }
}