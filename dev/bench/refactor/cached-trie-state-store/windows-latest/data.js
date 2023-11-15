window.BENCHMARK_DATA = {
  "lastUpdate": 1700052402270,
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
          "id": "36edcf8fc51a39ee63c4511f91b090c07a38d2e3",
          "message": "Increased cache size; more info for logging",
          "timestamp": "2023-11-15T10:59:12+09:00",
          "tree_id": "018584c062bbc4b3e74bb6135651e788b8e16e58",
          "url": "https://github.com/greymistcube/libplanet/commit/36edcf8fc51a39ee63c4511f91b090c07a38d2e3"
        },
        "date": 1700031380852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937105.3191489362,
            "unit": "ns",
            "range": "± 87842.63099921809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1689846,
            "unit": "ns",
            "range": "± 63023.45922150654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1404916.8421052631,
            "unit": "ns",
            "range": "± 114756.88886996327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6122385.56701031,
            "unit": "ns",
            "range": "± 377100.19998825976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34646.25,
            "unit": "ns",
            "range": "± 1815.6104911836685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5183064.285714285,
            "unit": "ns",
            "range": "± 28714.472554200504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13474220,
            "unit": "ns",
            "range": "± 117796.38122018617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32675300,
            "unit": "ns",
            "range": "± 452986.8951116104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65370907.14285714,
            "unit": "ns",
            "range": "± 631057.5610272571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132372966.66666667,
            "unit": "ns",
            "range": "± 962441.165301374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3092378.3052884615,
            "unit": "ns",
            "range": "± 6107.306220038793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1006450.5719866072,
            "unit": "ns",
            "range": "± 1844.629780918285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 685957.3016826923,
            "unit": "ns",
            "range": "± 1861.4833639350186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999545.786830357,
            "unit": "ns",
            "range": "± 7279.091852928713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614638.2393973215,
            "unit": "ns",
            "range": "± 1679.654016462739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570429.6158854166,
            "unit": "ns",
            "range": "± 1197.879894707878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2239529.411764706,
            "unit": "ns",
            "range": "± 44514.572960799625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2318753.846153846,
            "unit": "ns",
            "range": "± 30820.139935454958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2830563.1578947366,
            "unit": "ns",
            "range": "± 62586.51088716514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2739380.9523809524,
            "unit": "ns",
            "range": "± 146109.25642662027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6848826.5625,
            "unit": "ns",
            "range": "± 314723.03482318146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172031.1475409836,
            "unit": "ns",
            "range": "± 7682.4592630139505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163848.75,
            "unit": "ns",
            "range": "± 8311.498726219561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138820,
            "unit": "ns",
            "range": "± 2441.6621972980383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2707285.714285714,
            "unit": "ns",
            "range": "± 19846.831064346352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2538330.769230769,
            "unit": "ns",
            "range": "± 40839.51078337792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10610.112359550561,
            "unit": "ns",
            "range": "± 1390.0658048370672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55641.666666666664,
            "unit": "ns",
            "range": "± 6988.255812307219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45208.333333333336,
            "unit": "ns",
            "range": "± 1786.335049144314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52327.17391304348,
            "unit": "ns",
            "range": "± 7236.493341495575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2397.8947368421054,
            "unit": "ns",
            "range": "± 426.75892526244064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10186.813186813188,
            "unit": "ns",
            "range": "± 1356.8925930807898"
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
          "id": "2cb9598b3c4da87ba22bcac76efd64c3b8cea0b1",
          "message": "Cleanup",
          "timestamp": "2023-11-15T16:17:53+09:00",
          "tree_id": "95f237df7f8055061a247e7af3498a539678ae8e",
          "url": "https://github.com/greymistcube/libplanet/commit/2cb9598b3c4da87ba22bcac76efd64c3b8cea0b1"
        },
        "date": 1700033373283,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020790.404040404,
            "unit": "ns",
            "range": "± 98332.09756778294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1828533.8709677418,
            "unit": "ns",
            "range": "± 82368.24540041953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1499515.1515151516,
            "unit": "ns",
            "range": "± 158246.47358074717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5910888.888888889,
            "unit": "ns",
            "range": "± 249307.08174115175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34332.8125,
            "unit": "ns",
            "range": "± 1596.4300140258388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5093892.857142857,
            "unit": "ns",
            "range": "± 52809.999989595715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13800507.142857144,
            "unit": "ns",
            "range": "± 151944.2330101901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33633823.333333336,
            "unit": "ns",
            "range": "± 224978.13692720918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67342260,
            "unit": "ns",
            "range": "± 869072.202984309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135271433.33333334,
            "unit": "ns",
            "range": "± 1555762.0184640188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3178525.78125,
            "unit": "ns",
            "range": "± 7184.058936029768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1019057.421875,
            "unit": "ns",
            "range": "± 3195.6219958153056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 683630.1607572115,
            "unit": "ns",
            "range": "± 2031.1718515264447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2014376.8973214286,
            "unit": "ns",
            "range": "± 2806.83428249109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612545.44921875,
            "unit": "ns",
            "range": "± 1459.1460300926349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561336.572265625,
            "unit": "ns",
            "range": "± 576.2569541135995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2164130.769230769,
            "unit": "ns",
            "range": "± 59009.638326163426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2359494.285714286,
            "unit": "ns",
            "range": "± 77234.53944987057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2930510.5263157897,
            "unit": "ns",
            "range": "± 62171.23213563616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2854425.714285714,
            "unit": "ns",
            "range": "± 70490.96872840454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6795011.904761905,
            "unit": "ns",
            "range": "± 245036.10505729404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180464,
            "unit": "ns",
            "range": "± 7223.367974702603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173896.55172413794,
            "unit": "ns",
            "range": "± 7555.338893492686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140712.5,
            "unit": "ns",
            "range": "± 1892.397068975395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2757880,
            "unit": "ns",
            "range": "± 35695.16173697174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2568253.3333333335,
            "unit": "ns",
            "range": "± 45612.07338079731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12007.058823529413,
            "unit": "ns",
            "range": "± 1145.8816771059614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57395.294117647056,
            "unit": "ns",
            "range": "± 3774.346549636202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47595.78947368421,
            "unit": "ns",
            "range": "± 2732.1924712377086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58872.82608695652,
            "unit": "ns",
            "range": "± 7519.236915644946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3315.9574468085107,
            "unit": "ns",
            "range": "± 518.3313158670474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12791.578947368422,
            "unit": "ns",
            "range": "± 2237.573874111258"
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
          "id": "2f672581a1746aaca795d8b7bc847c7c2c0f5fc4",
          "message": "Changelog",
          "timestamp": "2023-11-15T16:23:58+09:00",
          "tree_id": "cd6f6db03c14e8819c3fdf2657dc233041eb38f2",
          "url": "https://github.com/greymistcube/libplanet/commit/2f672581a1746aaca795d8b7bc847c7c2c0f5fc4"
        },
        "date": 1700033776536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1203967.7419354839,
            "unit": "ns",
            "range": "± 35254.4690982271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1877821.7391304348,
            "unit": "ns",
            "range": "± 82716.76668637739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1615449.4845360825,
            "unit": "ns",
            "range": "± 196835.112956098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6097518.9655172415,
            "unit": "ns",
            "range": "± 263429.14570988034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38368.88888888889,
            "unit": "ns",
            "range": "± 2975.731217642218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5481626.666666667,
            "unit": "ns",
            "range": "± 102520.3078604894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14026376.923076924,
            "unit": "ns",
            "range": "± 132241.59805602112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35670333.333333336,
            "unit": "ns",
            "range": "± 359263.62319664506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70285028.57142857,
            "unit": "ns",
            "range": "± 592252.5960959712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 141027153.33333334,
            "unit": "ns",
            "range": "± 1220278.4002412064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311151.6145833335,
            "unit": "ns",
            "range": "± 39670.5089733149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049239.1536458333,
            "unit": "ns",
            "range": "± 2199.08032189438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 689063.0013020834,
            "unit": "ns",
            "range": "± 975.4194013416371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952267.4879807692,
            "unit": "ns",
            "range": "± 1596.2538347576774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620435.7421875,
            "unit": "ns",
            "range": "± 1718.7633650619264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561089.7739955357,
            "unit": "ns",
            "range": "± 564.9702108028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2262727.6923076925,
            "unit": "ns",
            "range": "± 105212.87425336239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492117.0212765955,
            "unit": "ns",
            "range": "± 96809.25512517303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2995786.6666666665,
            "unit": "ns",
            "range": "± 89338.5453103022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2965602.0833333335,
            "unit": "ns",
            "range": "± 108628.56974930741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6825427.586206896,
            "unit": "ns",
            "range": "± 195000.30200810265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194000,
            "unit": "ns",
            "range": "± 13320.964300216425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181308.33333333334,
            "unit": "ns",
            "range": "± 8121.7075032508765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155756.41025641025,
            "unit": "ns",
            "range": "± 8013.747761200946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2824886.6666666665,
            "unit": "ns",
            "range": "± 44160.694654646824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2628192.3076923075,
            "unit": "ns",
            "range": "± 19919.147469142245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15190.721649484536,
            "unit": "ns",
            "range": "± 2478.914516906661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64773.11827956989,
            "unit": "ns",
            "range": "± 6854.753028642532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63553.53535353536,
            "unit": "ns",
            "range": "± 9131.559014034712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65662.63736263737,
            "unit": "ns",
            "range": "± 7345.529983929734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3904.1237113402062,
            "unit": "ns",
            "range": "± 750.2662757555365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13046.511627906977,
            "unit": "ns",
            "range": "± 950.6279874122351"
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
          "id": "316688799b1c0a9e252a0a84717234b9415001c4",
          "message": "Typo",
          "timestamp": "2023-11-15T16:27:27+09:00",
          "tree_id": "e6875f10e551179de674c6806cd3642dddd95e7a",
          "url": "https://github.com/greymistcube/libplanet/commit/316688799b1c0a9e252a0a84717234b9415001c4"
        },
        "date": 1700034119641,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1282267,
            "unit": "ns",
            "range": "± 99150.705672494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2362882.2580645164,
            "unit": "ns",
            "range": "± 106049.00742178319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1916538,
            "unit": "ns",
            "range": "± 141191.85370096657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8102383.783783784,
            "unit": "ns",
            "range": "± 405154.2655724042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46085.8024691358,
            "unit": "ns",
            "range": "± 2424.7323894594692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7444471.428571428,
            "unit": "ns",
            "range": "± 34111.32066927632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18312480,
            "unit": "ns",
            "range": "± 84346.82820694224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47107215.384615384,
            "unit": "ns",
            "range": "± 135751.99106062157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93529586.66666667,
            "unit": "ns",
            "range": "± 222616.0944851237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186665935.7142857,
            "unit": "ns",
            "range": "± 366472.9260797454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4300051.622596154,
            "unit": "ns",
            "range": "± 4820.8049922042665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1383767.5223214286,
            "unit": "ns",
            "range": "± 1286.6666332930427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1016380.3385416666,
            "unit": "ns",
            "range": "± 971.8246837108645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2538687.890625,
            "unit": "ns",
            "range": "± 3333.594080217977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801699.3619791666,
            "unit": "ns",
            "range": "± 1002.5516006042277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727097.4934895834,
            "unit": "ns",
            "range": "± 1091.4417724362647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3181102.6315789474,
            "unit": "ns",
            "range": "± 53772.032883905704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3295428.5714285714,
            "unit": "ns",
            "range": "± 50525.25916001632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3999972.727272727,
            "unit": "ns",
            "range": "± 88370.84297123055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3782582.2580645164,
            "unit": "ns",
            "range": "± 58526.33815697439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9410445.161290323,
            "unit": "ns",
            "range": "± 279110.4331487326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259831.70731707316,
            "unit": "ns",
            "range": "± 9184.999701262659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251292.5,
            "unit": "ns",
            "range": "± 8866.687512024851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233061.42857142858,
            "unit": "ns",
            "range": "± 11347.288418443666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3964333.3333333335,
            "unit": "ns",
            "range": "± 23351.802214532963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3573893.3333333335,
            "unit": "ns",
            "range": "± 36592.650836446584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22037.362637362636,
            "unit": "ns",
            "range": "± 1248.2564152224807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92421.21212121213,
            "unit": "ns",
            "range": "± 7611.662275574409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73582.79569892473,
            "unit": "ns",
            "range": "± 5173.461200662851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83447.42268041238,
            "unit": "ns",
            "range": "± 8302.887208469327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5345.918367346939,
            "unit": "ns",
            "range": "± 737.2515646345349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20552.127659574468,
            "unit": "ns",
            "range": "± 1552.50257377961"
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
          "id": "3c4519f6d162c0f2926f6f14abf229f8de2d8e51",
          "message": "Typo",
          "timestamp": "2023-11-15T16:49:43+09:00",
          "tree_id": "82c1ccaa01b1171d086a8f0aca00ae959936273e",
          "url": "https://github.com/greymistcube/libplanet/commit/3c4519f6d162c0f2926f6f14abf229f8de2d8e51"
        },
        "date": 1700035315009,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974090.4255319149,
            "unit": "ns",
            "range": "± 96719.83047063611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1753301.1494252873,
            "unit": "ns",
            "range": "± 91979.21971363192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1466367.6767676768,
            "unit": "ns",
            "range": "± 151241.57512598293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6000947.916666667,
            "unit": "ns",
            "range": "± 367171.12143613177"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34696.629213483146,
            "unit": "ns",
            "range": "± 1930.0523684724117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4998273.333333333,
            "unit": "ns",
            "range": "± 47955.104996633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13938703.333333334,
            "unit": "ns",
            "range": "± 158302.76537006395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36412715.384615384,
            "unit": "ns",
            "range": "± 334728.6907485769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68592621.42857143,
            "unit": "ns",
            "range": "± 1206248.7632061073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131067297.61904761,
            "unit": "ns",
            "range": "± 3115268.825578147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3226297.823660714,
            "unit": "ns",
            "range": "± 8282.180249981746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071226.3151041667,
            "unit": "ns",
            "range": "± 2869.578811464803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732395.2749399039,
            "unit": "ns",
            "range": "± 2339.632351466297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925181.4732142857,
            "unit": "ns",
            "range": "± 2800.7616368109434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624998.61328125,
            "unit": "ns",
            "range": "± 1059.5788882141437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570001.8345424107,
            "unit": "ns",
            "range": "± 832.9252644214893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2137379.411764706,
            "unit": "ns",
            "range": "± 64951.26275121083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286120,
            "unit": "ns",
            "range": "± 141061.83900772888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2788912.121212121,
            "unit": "ns",
            "range": "± 86577.13958363864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2709691.6666666665,
            "unit": "ns",
            "range": "± 120100.45553995187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6516769.696969697,
            "unit": "ns",
            "range": "± 182620.35155762432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176678.46153846153,
            "unit": "ns",
            "range": "± 7829.441477280091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168578.82352941178,
            "unit": "ns",
            "range": "± 9014.56617710162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140793.33333333334,
            "unit": "ns",
            "range": "± 3605.3536182521234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2776035.714285714,
            "unit": "ns",
            "range": "± 40203.72365346766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2474046.6666666665,
            "unit": "ns",
            "range": "± 46268.79335032672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11451.612903225807,
            "unit": "ns",
            "range": "± 1447.2322087069006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56609.278350515466,
            "unit": "ns",
            "range": "± 7247.098305445929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45717.02127659575,
            "unit": "ns",
            "range": "± 2618.324108915355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58085.48387096774,
            "unit": "ns",
            "range": "± 10433.32500630729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2574.226804123711,
            "unit": "ns",
            "range": "± 570.1385706043063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11024.21052631579,
            "unit": "ns",
            "range": "± 2034.9978195123288"
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
          "id": "23b1be42b36c12727a64a63b85e4d317a2d3f736",
          "message": "Changelog",
          "timestamp": "2023-11-15T17:23:30+09:00",
          "tree_id": "25bdddc3ac7afa6fd129895558155d71c42a27d9",
          "url": "https://github.com/greymistcube/libplanet/commit/23b1be42b36c12727a64a63b85e4d317a2d3f736"
        },
        "date": 1700037352469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002983.6734693878,
            "unit": "ns",
            "range": "± 104423.79226254052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1782431.3725490195,
            "unit": "ns",
            "range": "± 66895.0745277889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1515381.8181818181,
            "unit": "ns",
            "range": "± 136460.55747973802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5866351.724137931,
            "unit": "ns",
            "range": "± 257070.14213912774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34861.17647058824,
            "unit": "ns",
            "range": "± 1792.45071112729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5191006.666666667,
            "unit": "ns",
            "range": "± 56419.366820099574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13470313.333333334,
            "unit": "ns",
            "range": "± 149335.72372661668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33904442.85714286,
            "unit": "ns",
            "range": "± 179339.8523400826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67522784.61538461,
            "unit": "ns",
            "range": "± 359738.1845318292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135195686.66666666,
            "unit": "ns",
            "range": "± 719705.7006331196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3289893.5546875,
            "unit": "ns",
            "range": "± 5507.336195203324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066775.306919643,
            "unit": "ns",
            "range": "± 1843.3055224979942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746462.71484375,
            "unit": "ns",
            "range": "± 959.2469150393193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917216.71875,
            "unit": "ns",
            "range": "± 2201.1588373754307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618799.0625,
            "unit": "ns",
            "range": "± 1391.0408976884307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575334.9739583334,
            "unit": "ns",
            "range": "± 1848.8638835318702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2252802.564102564,
            "unit": "ns",
            "range": "± 77926.8229180073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303595.9183673467,
            "unit": "ns",
            "range": "± 89521.75238264643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2898111.7647058824,
            "unit": "ns",
            "range": "± 58875.63038253753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2789906.4516129033,
            "unit": "ns",
            "range": "± 125982.96120932938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6691052,
            "unit": "ns",
            "range": "± 167622.90794120793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183600,
            "unit": "ns",
            "range": "± 6799.891066665591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175629.23076923078,
            "unit": "ns",
            "range": "± 7409.152344333221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140244.11764705883,
            "unit": "ns",
            "range": "± 4492.835453250227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2852621.4285714286,
            "unit": "ns",
            "range": "± 27295.369530420317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2650413.3333333335,
            "unit": "ns",
            "range": "± 31331.88395837302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13065.882352941177,
            "unit": "ns",
            "range": "± 1074.8812715361448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60101.0989010989,
            "unit": "ns",
            "range": "± 5163.42897491568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49143.956043956045,
            "unit": "ns",
            "range": "± 3318.9425622296826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65401.063829787236,
            "unit": "ns",
            "range": "± 9443.658561603126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2957.1428571428573,
            "unit": "ns",
            "range": "± 625.0773148055656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14000,
            "unit": "ns",
            "range": "± 2707.849511991358"
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
          "id": "d57b1205354d9b11d090b28a31c4c81a5958352a",
          "message": "Changelog",
          "timestamp": "2023-11-15T20:43:36+09:00",
          "tree_id": "ad5ef5bf6df2e09d80ee6c2f2112dff99fe5aee8",
          "url": "https://github.com/greymistcube/libplanet/commit/d57b1205354d9b11d090b28a31c4c81a5958352a"
        },
        "date": 1700049399236,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 964792.4731182796,
            "unit": "ns",
            "range": "± 87289.2383881451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1740568.5714285714,
            "unit": "ns",
            "range": "± 83767.25786775658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1420370,
            "unit": "ns",
            "range": "± 144049.92234520495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6045250,
            "unit": "ns",
            "range": "± 322546.2736952619"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34407.22891566265,
            "unit": "ns",
            "range": "± 1741.654885343676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5094192.307692308,
            "unit": "ns",
            "range": "± 55299.20827550279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13081623.076923076,
            "unit": "ns",
            "range": "± 150715.99756852927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32161873.333333332,
            "unit": "ns",
            "range": "± 492103.79489735793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65729240,
            "unit": "ns",
            "range": "± 1035468.575642379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130521186.66666667,
            "unit": "ns",
            "range": "± 1907047.5572265652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3343246.8489583335,
            "unit": "ns",
            "range": "± 17386.187966978614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074777.427455357,
            "unit": "ns",
            "range": "± 3064.602082915374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740940.4854910715,
            "unit": "ns",
            "range": "± 1939.5345703401758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939132.3939732143,
            "unit": "ns",
            "range": "± 4687.11836691229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611162.9131610577,
            "unit": "ns",
            "range": "± 1131.5883546037785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561906.0546875,
            "unit": "ns",
            "range": "± 1215.5156477688738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156573.8095238097,
            "unit": "ns",
            "range": "± 77032.29623464658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2310278.5714285714,
            "unit": "ns",
            "range": "± 40458.18693552505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2851273.529411765,
            "unit": "ns",
            "range": "± 107982.97767682806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2671868.5393258426,
            "unit": "ns",
            "range": "± 147823.01810204232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6996320.224719102,
            "unit": "ns",
            "range": "± 385996.313330185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173140.21739130435,
            "unit": "ns",
            "range": "± 10022.031333024946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171437.5,
            "unit": "ns",
            "range": "± 9414.629267946431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143087.5,
            "unit": "ns",
            "range": "± 3694.8039307866557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2761814.285714286,
            "unit": "ns",
            "range": "± 30733.566143747263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2539706.6666666665,
            "unit": "ns",
            "range": "± 44941.03226398322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11784.782608695652,
            "unit": "ns",
            "range": "± 2034.1553196129357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55702.68817204301,
            "unit": "ns",
            "range": "± 5458.6108958759805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45234.831460674155,
            "unit": "ns",
            "range": "± 2808.513887336613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59742.708333333336,
            "unit": "ns",
            "range": "± 10840.584027689816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2434.7368421052633,
            "unit": "ns",
            "range": "± 505.24239412356206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11449.473684210527,
            "unit": "ns",
            "range": "± 1949.1882480734823"
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
          "id": "3e6989e4f1b333305b4cc195508af2e0b4661d60",
          "message": "Changelog",
          "timestamp": "2023-11-15T21:34:57+09:00",
          "tree_id": "95535608d9a255489106e22a9d814b2f771c7c21",
          "url": "https://github.com/greymistcube/libplanet/commit/3e6989e4f1b333305b4cc195508af2e0b4661d60"
        },
        "date": 1700052386306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973397,
            "unit": "ns",
            "range": "± 115570.01241103536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1752301.2048192772,
            "unit": "ns",
            "range": "± 90817.13265621505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1442044.7916666667,
            "unit": "ns",
            "range": "± 129284.10645981987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5946849.275362318,
            "unit": "ns",
            "range": "± 285777.87735108315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33958.20895522388,
            "unit": "ns",
            "range": "± 1511.786947244215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5286557.142857143,
            "unit": "ns",
            "range": "± 50636.631074681565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13257586.666666666,
            "unit": "ns",
            "range": "± 235532.42684445402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33037093.75,
            "unit": "ns",
            "range": "± 630712.2983513693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64933313.333333336,
            "unit": "ns",
            "range": "± 779409.4017419918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131510921.42857143,
            "unit": "ns",
            "range": "± 1111894.9162983478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3285671.484375,
            "unit": "ns",
            "range": "± 8487.629297848358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088631.0416666667,
            "unit": "ns",
            "range": "± 4106.556732650201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725821.5690104166,
            "unit": "ns",
            "range": "± 1797.3938827018744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945265.8954326923,
            "unit": "ns",
            "range": "± 6844.095986520534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613090.6877790178,
            "unit": "ns",
            "range": "± 1253.1137012487584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565595.5915178572,
            "unit": "ns",
            "range": "± 1087.9526606804422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2181506.25,
            "unit": "ns",
            "range": "± 59969.72320773961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2296600,
            "unit": "ns",
            "range": "± 70237.40833353523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2812018.75,
            "unit": "ns",
            "range": "± 80746.53068548479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2672165,
            "unit": "ns",
            "range": "± 138917.57149794287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6811197.872340426,
            "unit": "ns",
            "range": "± 262034.72263221125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172825.39682539683,
            "unit": "ns",
            "range": "± 7448.965467334249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171504.44444444444,
            "unit": "ns",
            "range": "± 11448.07437918102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141962.06896551725,
            "unit": "ns",
            "range": "± 4058.361192218167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2801706.25,
            "unit": "ns",
            "range": "± 45356.69695131396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2591559.523809524,
            "unit": "ns",
            "range": "± 61217.96227221145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11376.08695652174,
            "unit": "ns",
            "range": "± 1690.7225560647848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56564.13043478261,
            "unit": "ns",
            "range": "± 5819.021131415037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44626.229508196724,
            "unit": "ns",
            "range": "± 2002.656705424427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59918.88888888889,
            "unit": "ns",
            "range": "± 7810.665345127969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2838.1720430107525,
            "unit": "ns",
            "range": "± 580.0767307501114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11334.0206185567,
            "unit": "ns",
            "range": "± 2198.857970531623"
          }
        ]
      }
    ]
  }
}