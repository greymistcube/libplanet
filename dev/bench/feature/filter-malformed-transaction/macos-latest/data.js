window.BENCHMARK_DATA = {
  "lastUpdate": 1683189529596,
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
          "id": "1c8fad6d66c2870eaf410a8fd7ab02d2c3882cda",
          "message": "Changelog",
          "timestamp": "2023-05-04T17:05:32+09:00",
          "tree_id": "77d55871bc57f7b795fa7d615ec8640e8890a6d3",
          "url": "https://github.com/greymistcube/libplanet/commit/1c8fad6d66c2870eaf410a8fd7ab02d2c3882cda"
        },
        "date": 1683189113544,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9035711.70879121,
            "unit": "ns",
            "range": "± 1441492.1715994044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29742657.53763441,
            "unit": "ns",
            "range": "± 9609173.972826008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66790843.05376344,
            "unit": "ns",
            "range": "± 15065585.946550814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105023394.9404762,
            "unit": "ns",
            "range": "± 10211633.963276325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219405503.56593406,
            "unit": "ns",
            "range": "± 25558229.670925952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75336.73626373627,
            "unit": "ns",
            "range": "± 9557.499338024407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 377183.3965517241,
            "unit": "ns",
            "range": "± 39820.513334336916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366124.9775280899,
            "unit": "ns",
            "range": "± 46202.181041586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 343208.87078651687,
            "unit": "ns",
            "range": "± 21374.42846784129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4485981.515873016,
            "unit": "ns",
            "range": "± 205818.39925616636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4117600.632075472,
            "unit": "ns",
            "range": "± 170143.31124130415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27950.395833333332,
            "unit": "ns",
            "range": "± 3605.4135742889007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129834.70224719102,
            "unit": "ns",
            "range": "± 13405.379051963173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120645.76595744681,
            "unit": "ns",
            "range": "± 7997.120011746073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125809.38541666667,
            "unit": "ns",
            "range": "± 14969.238703610808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8746.59375,
            "unit": "ns",
            "range": "± 1043.1693365904846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25466.90860215054,
            "unit": "ns",
            "range": "± 2804.8721943934847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1774040.6847826086,
            "unit": "ns",
            "range": "± 249617.10803240232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3249977.105882353,
            "unit": "ns",
            "range": "± 303277.5119539082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2770172.5,
            "unit": "ns",
            "range": "± 326661.1469333919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12822696.592783505,
            "unit": "ns",
            "range": "± 5872596.9480816815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3253573.8571428573,
            "unit": "ns",
            "range": "± 106761.28366047276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3714420.967391304,
            "unit": "ns",
            "range": "± 245120.4906440756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5356845.22631579,
            "unit": "ns",
            "range": "± 828470.1190391179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6118788.44680851,
            "unit": "ns",
            "range": "± 1657006.63642512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11380306.350515464,
            "unit": "ns",
            "range": "± 3534355.091869525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7834906.149010417,
            "unit": "ns",
            "range": "± 394058.5440839729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2204310.339453125,
            "unit": "ns",
            "range": "± 127234.90659288886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414833.6727366727,
            "unit": "ns",
            "range": "± 42051.81387012517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3029039.6202116935,
            "unit": "ns",
            "range": "± 212043.7492088264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924164.1135416667,
            "unit": "ns",
            "range": "± 45017.12457287336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784248.7379786532,
            "unit": "ns",
            "range": "± 38306.980541218494"
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
          "id": "67ee8d7dcf8793c40cd60a48b6274933d3e769c9",
          "message": "Update Libplanet.Tests/Blockchain/BlockChainTest.ProposeBlock.cs\n\nCo-authored-by: Swen Mun <longfinfunnel@gmail.com>",
          "timestamp": "2023-05-04T17:12:06+09:00",
          "tree_id": "0304b66bc59b57ddd30c4a4bb80e79cb46f4c2ce",
          "url": "https://github.com/greymistcube/libplanet/commit/67ee8d7dcf8793c40cd60a48b6274933d3e769c9"
        },
        "date": 1683189503214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10104852.666666666,
            "unit": "ns",
            "range": "± 1772214.1637133795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27679104.09574468,
            "unit": "ns",
            "range": "± 5642421.67136843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70787502.75555556,
            "unit": "ns",
            "range": "± 14130773.616525695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132665229.21578947,
            "unit": "ns",
            "range": "± 25304579.825279426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242385667.2826087,
            "unit": "ns",
            "range": "± 17826625.33128802"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75521.4623655914,
            "unit": "ns",
            "range": "± 9276.892644770121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332391.79032258067,
            "unit": "ns",
            "range": "± 25855.511554632856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335005.15591397847,
            "unit": "ns",
            "range": "± 31237.240500686185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322823.8085106383,
            "unit": "ns",
            "range": "± 36417.13571409552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4358879.652173913,
            "unit": "ns",
            "range": "± 261351.99618172884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4056950.1,
            "unit": "ns",
            "range": "± 248891.27117029473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22733.66304347826,
            "unit": "ns",
            "range": "± 4596.629532715987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105437.6105263158,
            "unit": "ns",
            "range": "± 19951.222084520174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109968.4387755102,
            "unit": "ns",
            "range": "± 15510.894405517032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112518.74226804124,
            "unit": "ns",
            "range": "± 16950.389101530945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7162.131578947368,
            "unit": "ns",
            "range": "± 1053.1983916545119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18927.994736842105,
            "unit": "ns",
            "range": "± 3234.855535837414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1717829.7045454546,
            "unit": "ns",
            "range": "± 245860.8428669926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3153868.438202247,
            "unit": "ns",
            "range": "± 337720.1616845317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2891807.8651685393,
            "unit": "ns",
            "range": "± 572401.50564506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9607234.782608695,
            "unit": "ns",
            "range": "± 3116759.9320021346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3587520.1818181816,
            "unit": "ns",
            "range": "± 248613.5320451073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3964089.4835164836,
            "unit": "ns",
            "range": "± 570502.5020115622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4632453.4,
            "unit": "ns",
            "range": "± 303469.70725913433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4656041.368421053,
            "unit": "ns",
            "range": "± 278471.24822356907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7980580.276595744,
            "unit": "ns",
            "range": "± 473106.0695550991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6945035.19376929,
            "unit": "ns",
            "range": "± 365906.2301884579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2123717.1100814496,
            "unit": "ns",
            "range": "± 117658.53441256963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308702.3992745536,
            "unit": "ns",
            "range": "± 19264.926350957026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2866132.69421875,
            "unit": "ns",
            "range": "± 205179.0109184969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898402.9725260417,
            "unit": "ns",
            "range": "± 16696.54512270602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770043.3846693442,
            "unit": "ns",
            "range": "± 37712.41712409726"
          }
        ]
      }
    ]
  }
}