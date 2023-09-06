window.BENCHMARK_DATA = {
  "lastUpdate": 1693965905916,
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
          "id": "ad38230c09d5cc9bd0ac62a5cfd2c9c9fea4e9ff",
          "message": "Partial rollback for better API backward compatibility",
          "timestamp": "2023-09-06T10:05:14+09:00",
          "tree_id": "4b9e90624befad25a05a2d08390eddc4eeea7721",
          "url": "https://github.com/greymistcube/libplanet/commit/ad38230c09d5cc9bd0ac62a5cfd2c9c9fea4e9ff"
        },
        "date": 1693963675588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9300990.955882354,
            "unit": "ns",
            "range": "± 443281.76851872395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23389486.90909091,
            "unit": "ns",
            "range": "± 818003.7214760352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56649226.0882353,
            "unit": "ns",
            "range": "± 1804963.0234532105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112941530.61538461,
            "unit": "ns",
            "range": "± 1836509.313893459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228478075.25,
            "unit": "ns",
            "range": "± 2265622.3516596584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83597.04838709677,
            "unit": "ns",
            "range": "± 6785.341275765834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343990.28651685396,
            "unit": "ns",
            "range": "± 42770.92950492508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334604.80412371136,
            "unit": "ns",
            "range": "± 34214.11343827986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312557.7555555556,
            "unit": "ns",
            "range": "± 17593.650707105124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4078570.5833333335,
            "unit": "ns",
            "range": "± 45844.828403605796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3707617.5,
            "unit": "ns",
            "range": "± 70754.61435694495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29063.915789473685,
            "unit": "ns",
            "range": "± 6079.1050357257645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117268.75,
            "unit": "ns",
            "range": "± 19944.12995100376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130407.66,
            "unit": "ns",
            "range": "± 24029.64886720595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126473.20212765958,
            "unit": "ns",
            "range": "± 14736.304398650052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8149.649484536082,
            "unit": "ns",
            "range": "± 1283.5250780016358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20583.43157894737,
            "unit": "ns",
            "range": "± 3214.0674589851187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583547.0631578946,
            "unit": "ns",
            "range": "± 165060.17109287367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2883779.112359551,
            "unit": "ns",
            "range": "± 177191.90291521366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1975023.3979591837,
            "unit": "ns",
            "range": "± 145656.77192431584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5298892.79787234,
            "unit": "ns",
            "range": "± 205701.46281802317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530673.8865979384,
            "unit": "ns",
            "range": "± 267043.81328354764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3768484.8846153845,
            "unit": "ns",
            "range": "± 153434.5163781035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4666505.919354838,
            "unit": "ns",
            "range": "± 212146.48047843462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4020835.4891304346,
            "unit": "ns",
            "range": "± 278535.6817914392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7138397.563829787,
            "unit": "ns",
            "range": "± 515389.93586883094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6026801.462155578,
            "unit": "ns",
            "range": "± 334196.46069253143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1776017.0330053403,
            "unit": "ns",
            "range": "± 82977.10536211253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1087904.1712890626,
            "unit": "ns",
            "range": "± 43379.684568077515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2903418.8088148586,
            "unit": "ns",
            "range": "± 115116.44897812465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866118.7929829031,
            "unit": "ns",
            "range": "± 41694.47811753557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781823.1913918888,
            "unit": "ns",
            "range": "± 37316.361977371525"
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
          "id": "4945064eb0a4cc1dfe24c6737a129068823a2cbe",
          "message": "Changelog",
          "timestamp": "2023-09-06T10:46:50+09:00",
          "tree_id": "56559f8dbefdd2412f10a3531afb5e0c2d0c9ec7",
          "url": "https://github.com/greymistcube/libplanet/commit/4945064eb0a4cc1dfe24c6737a129068823a2cbe"
        },
        "date": 1693965866233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9061974.08,
            "unit": "ns",
            "range": "± 363377.8976901426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22241921,
            "unit": "ns",
            "range": "± 1120822.086251801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63292755.51764706,
            "unit": "ns",
            "range": "± 5224007.92118244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108203230.13636364,
            "unit": "ns",
            "range": "± 2570303.987051125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215219535.18333334,
            "unit": "ns",
            "range": "± 8955756.070073906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64718.14893617021,
            "unit": "ns",
            "range": "± 10765.206181402988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319864.0752688172,
            "unit": "ns",
            "range": "± 30303.770212860283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300192.7947368421,
            "unit": "ns",
            "range": "± 22817.76478641973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300810.152173913,
            "unit": "ns",
            "range": "± 17723.482762406937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4514428.02631579,
            "unit": "ns",
            "range": "± 97785.55685976466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3728941.48245614,
            "unit": "ns",
            "range": "± 161895.66509467174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18104.926315789475,
            "unit": "ns",
            "range": "± 2913.647937384254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91268.60309278351,
            "unit": "ns",
            "range": "± 10774.398462022269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95759.02127659574,
            "unit": "ns",
            "range": "± 12241.829689637087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97706.45833333333,
            "unit": "ns",
            "range": "± 11115.964770418852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5652.267676767677,
            "unit": "ns",
            "range": "± 1191.1868445111306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17004.34831460674,
            "unit": "ns",
            "range": "± 2053.409377226101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1589000.5786516855,
            "unit": "ns",
            "range": "± 159045.94289560034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2867740.2328767125,
            "unit": "ns",
            "range": "± 137956.01621738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1988348.1559139786,
            "unit": "ns",
            "range": "± 185885.63008511762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5424087.37654321,
            "unit": "ns",
            "range": "± 274282.4125236789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300644.3647058825,
            "unit": "ns",
            "range": "± 156073.28186043518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3505485.0434782607,
            "unit": "ns",
            "range": "± 202062.2748039404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4253126.23880597,
            "unit": "ns",
            "range": "± 201662.64848068703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3814999.554347826,
            "unit": "ns",
            "range": "± 218795.4391726557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7175410.163157894,
            "unit": "ns",
            "range": "± 686236.2133323755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5622091.253385416,
            "unit": "ns",
            "range": "± 103925.0645876338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1711872.2020089286,
            "unit": "ns",
            "range": "± 21894.85567240593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 947165.33203125,
            "unit": "ns",
            "range": "± 5183.229395775215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2493851.8337823274,
            "unit": "ns",
            "range": "± 72469.59882564821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809620.1664341518,
            "unit": "ns",
            "range": "± 4123.697494964991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766117.6190755208,
            "unit": "ns",
            "range": "± 12969.873521342131"
          }
        ]
      }
    ]
  }
}