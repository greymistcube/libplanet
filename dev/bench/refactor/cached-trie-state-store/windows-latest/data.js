window.BENCHMARK_DATA = {
  "lastUpdate": 1700033391749,
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
      }
    ]
  }
}