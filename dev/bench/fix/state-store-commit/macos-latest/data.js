window.BENCHMARK_DATA = {
  "lastUpdate": 1705548599863,
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
          "id": "82760cbd4c2fbec0e46cb9fa61e43ed5e5ac6bb0",
          "message": "Changelog; linting",
          "timestamp": "2024-01-18T12:14:03+09:00",
          "tree_id": "3346d90600647c3f8c3ed1ca8491013d2dfb717d",
          "url": "https://github.com/greymistcube/libplanet/commit/82760cbd4c2fbec0e46cb9fa61e43ed5e5ac6bb0"
        },
        "date": 1705548435244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7681594.5625,
            "unit": "ns",
            "range": "± 146076.31315855365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18782722.866666667,
            "unit": "ns",
            "range": "± 325257.0831719924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46994553.0625,
            "unit": "ns",
            "range": "± 798598.1733129178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92720271.66666667,
            "unit": "ns",
            "range": "± 1307150.8549890192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191361069.5882353,
            "unit": "ns",
            "range": "± 6028262.014451751"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37503.760869565216,
            "unit": "ns",
            "range": "± 6132.999025931633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214995.74561403508,
            "unit": "ns",
            "range": "± 9246.934594928322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214745.84375,
            "unit": "ns",
            "range": "± 17338.595950761122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199277.17777777778,
            "unit": "ns",
            "range": "± 11296.908913581086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3818646.7647058824,
            "unit": "ns",
            "range": "± 69595.921535074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3430827.9285714286,
            "unit": "ns",
            "range": "± 53774.40947065419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12974.197674418605,
            "unit": "ns",
            "range": "± 864.5631888554703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59361.54347826087,
            "unit": "ns",
            "range": "± 3553.490433619476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53679.28723404255,
            "unit": "ns",
            "range": "± 5905.703068089137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60231.096774193546,
            "unit": "ns",
            "range": "± 10364.578052050872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3553.087912087912,
            "unit": "ns",
            "range": "± 840.748788592006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11582.011764705883,
            "unit": "ns",
            "range": "± 711.8803319398571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1102890.5505617978,
            "unit": "ns",
            "range": "± 109202.38907226876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2402824.6170212766,
            "unit": "ns",
            "range": "± 141673.6544407002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642948.6022727273,
            "unit": "ns",
            "range": "± 139582.56082955544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7256318.554945055,
            "unit": "ns",
            "range": "± 702341.1663432581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2843961,
            "unit": "ns",
            "range": "± 91272.19281042962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2965815.7682926827,
            "unit": "ns",
            "range": "± 99157.71679325427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3536579.787234043,
            "unit": "ns",
            "range": "± 136378.20318653758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3454567.533333333,
            "unit": "ns",
            "range": "± 153590.9552486256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13686697.734042553,
            "unit": "ns",
            "range": "± 2646975.6837672293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4240232.80703125,
            "unit": "ns",
            "range": "± 63594.87574839555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1360684.2009114583,
            "unit": "ns",
            "range": "± 15924.153246162376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 888198.1559895833,
            "unit": "ns",
            "range": "± 12753.830987309448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2002247.0223214286,
            "unit": "ns",
            "range": "± 20439.487210888026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619054.2789481027,
            "unit": "ns",
            "range": "± 9735.9267537472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563659.3801432292,
            "unit": "ns",
            "range": "± 7228.550111006211"
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
          "id": "b87a01ffd3acdc0d26e174a4b87d1bb88684d92f",
          "message": "Fixed Commit()",
          "timestamp": "2024-01-18T12:08:49+09:00",
          "tree_id": "955624126e980538bd20b8681af8b62bbb718d63",
          "url": "https://github.com/greymistcube/libplanet/commit/b87a01ffd3acdc0d26e174a4b87d1bb88684d92f"
        },
        "date": 1705548584680,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9976928.272727273,
            "unit": "ns",
            "range": "± 241885.865767688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24937582.653846152,
            "unit": "ns",
            "range": "± 660050.2770829926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64000725.138554215,
            "unit": "ns",
            "range": "± 6627952.721061366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124522800.78125,
            "unit": "ns",
            "range": "± 3875251.677713285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245536781.10714287,
            "unit": "ns",
            "range": "± 6940224.465962101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65401.82608695652,
            "unit": "ns",
            "range": "± 17945.673375899743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300126.35,
            "unit": "ns",
            "range": "± 13411.834208695149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275246.1758241758,
            "unit": "ns",
            "range": "± 19521.842985397663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271391.5833333333,
            "unit": "ns",
            "range": "± 11977.354102556315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4806214.735294118,
            "unit": "ns",
            "range": "± 89398.75045444525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4467264.428571428,
            "unit": "ns",
            "range": "± 71607.96008015212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20298.526315789473,
            "unit": "ns",
            "range": "± 2830.364031327424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92719.78651685393,
            "unit": "ns",
            "range": "± 10300.220632535356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89269.39130434782,
            "unit": "ns",
            "range": "± 7939.640260841288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88906.94623655915,
            "unit": "ns",
            "range": "± 14317.27062309378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6878.397959183673,
            "unit": "ns",
            "range": "± 1619.1102223631165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19828,
            "unit": "ns",
            "range": "± 3232.8482969528764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1825131.5208333333,
            "unit": "ns",
            "range": "± 539466.8856187947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3553681.2010309277,
            "unit": "ns",
            "range": "± 818207.9358743178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2466817.3181818184,
            "unit": "ns",
            "range": "± 573566.5312132208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12873461.89361702,
            "unit": "ns",
            "range": "± 3091129.134720193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3689753.9285714286,
            "unit": "ns",
            "range": "± 55466.10120634915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3559941.0757575757,
            "unit": "ns",
            "range": "± 167374.68278513613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4488948.25,
            "unit": "ns",
            "range": "± 128355.15363605462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4475057.139240506,
            "unit": "ns",
            "range": "± 231767.46067665756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17097608.840425532,
            "unit": "ns",
            "range": "± 2962550.81703669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5765243.641773897,
            "unit": "ns",
            "range": "± 111473.22002035099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1418619.8047626202,
            "unit": "ns",
            "range": "± 58246.19567657242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1013707.3156054687,
            "unit": "ns",
            "range": "± 113561.85789839529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2016533.890625,
            "unit": "ns",
            "range": "± 16080.09044578673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 662364.3330759448,
            "unit": "ns",
            "range": "± 24544.773640266776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586575.1270228794,
            "unit": "ns",
            "range": "± 7960.049790962601"
          }
        ]
      }
    ]
  }
}