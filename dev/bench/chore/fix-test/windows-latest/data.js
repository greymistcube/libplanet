window.BENCHMARK_DATA = {
  "lastUpdate": 1689822551883,
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
          "id": "af6f83ceeb3a583a1157b9496332826fd8e37e90",
          "message": "Simple test fix",
          "timestamp": "2023-07-20T01:40:51+09:00",
          "tree_id": "957d5b3c5e1ff5e5c90d3fff0e604c1225fe9000",
          "url": "https://github.com/greymistcube/libplanet/commit/af6f83ceeb3a583a1157b9496332826fd8e37e90"
        },
        "date": 1689785914737,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1366429,
            "unit": "ns",
            "range": "± 114072.23415472542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2565901.4492753623,
            "unit": "ns",
            "range": "± 122747.037214458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1792453.5353535353,
            "unit": "ns",
            "range": "± 149153.21003553478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4902265.0602409635,
            "unit": "ns",
            "range": "± 260811.41557844612"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46068.75,
            "unit": "ns",
            "range": "± 3092.548344514261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7193950,
            "unit": "ns",
            "range": "± 88747.03678693468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19978900,
            "unit": "ns",
            "range": "± 224225.49237000558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51344630,
            "unit": "ns",
            "range": "± 549956.866100814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99736766.66666667,
            "unit": "ns",
            "range": "± 1777577.8309930894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197827805.88235295,
            "unit": "ns",
            "range": "± 3941350.828629473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4848169.192708333,
            "unit": "ns",
            "range": "± 22991.878034531685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568091.1197916667,
            "unit": "ns",
            "range": "± 7092.7317967061545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1190313.3072916667,
            "unit": "ns",
            "range": "± 6590.8653933741425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673384.1927083335,
            "unit": "ns",
            "range": "± 8358.329736190579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858701.5625,
            "unit": "ns",
            "range": "± 2741.349474764686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783849.2638221154,
            "unit": "ns",
            "range": "± 2184.423029226638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3226452.4590163934,
            "unit": "ns",
            "range": "± 144653.07187262145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3274809.090909091,
            "unit": "ns",
            "range": "± 69640.57321152258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4074968.75,
            "unit": "ns",
            "range": "± 124603.12852050214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3750865,
            "unit": "ns",
            "range": "± 130218.80905141633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6070138.461538462,
            "unit": "ns",
            "range": "± 163196.27220478555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260652.27272727274,
            "unit": "ns",
            "range": "± 9258.044613384887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250601.53846153847,
            "unit": "ns",
            "range": "± 11664.522765469399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226503.79746835443,
            "unit": "ns",
            "range": "± 11778.842865091048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4091588.4615384615,
            "unit": "ns",
            "range": "± 48775.75453818455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3674366.6666666665,
            "unit": "ns",
            "range": "± 75852.30424201713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21135.05154639175,
            "unit": "ns",
            "range": "± 1844.8713390727166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85164.58333333333,
            "unit": "ns",
            "range": "± 5254.311095445272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73279.41176470589,
            "unit": "ns",
            "range": "± 3515.448160365579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97129.59183673469,
            "unit": "ns",
            "range": "± 15857.043114229418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5378.125,
            "unit": "ns",
            "range": "± 845.0727935011216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20715.625,
            "unit": "ns",
            "range": "± 1838.3819043701963"
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
          "id": "ba662cd6cf763d049714afff7b78975135e5512e",
          "message": "Simple test fix",
          "timestamp": "2023-07-20T11:52:06+09:00",
          "tree_id": "957d5b3c5e1ff5e5c90d3fff0e604c1225fe9000",
          "url": "https://github.com/greymistcube/libplanet/commit/ba662cd6cf763d049714afff7b78975135e5512e"
        },
        "date": 1689822530644,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1473320,
            "unit": "ns",
            "range": "± 117079.47831462284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2581067.5675675673,
            "unit": "ns",
            "range": "± 129238.8286241376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1834271.4285714286,
            "unit": "ns",
            "range": "± 144395.1901132273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4883256.25,
            "unit": "ns",
            "range": "± 191672.74238365857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47367.03296703297,
            "unit": "ns",
            "range": "± 2680.134944573374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7571743.75,
            "unit": "ns",
            "range": "± 136870.0306556065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20747185.714285713,
            "unit": "ns",
            "range": "± 202779.53491469444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52169366.666666664,
            "unit": "ns",
            "range": "± 426194.94477572234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103723053.33333333,
            "unit": "ns",
            "range": "± 1016709.197689618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207817553.33333334,
            "unit": "ns",
            "range": "± 1540754.1204908472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4927267.466517857,
            "unit": "ns",
            "range": "± 8987.060137039836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549282.6302083333,
            "unit": "ns",
            "range": "± 4011.965199464702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1186161.3978794643,
            "unit": "ns",
            "range": "± 2939.186873610375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639775.8072916665,
            "unit": "ns",
            "range": "± 11131.627380007163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845174.2396763393,
            "unit": "ns",
            "range": "± 1635.2635153610536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769160.2120535715,
            "unit": "ns",
            "range": "± 1090.6364440077327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372657.5,
            "unit": "ns",
            "range": "± 117929.56152199172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3525506.6666666665,
            "unit": "ns",
            "range": "± 58818.73446283525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4274318.75,
            "unit": "ns",
            "range": "± 82872.10402179977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3937546.153846154,
            "unit": "ns",
            "range": "± 48433.22921618682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6466985.714285715,
            "unit": "ns",
            "range": "± 207094.822190588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268055.9322033898,
            "unit": "ns",
            "range": "± 11653.788361204188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252403.33333333334,
            "unit": "ns",
            "range": "± 7097.327487953783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228905.88235294117,
            "unit": "ns",
            "range": "± 7306.449669546663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4148682.3529411764,
            "unit": "ns",
            "range": "± 83273.09165701515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3846661.111111111,
            "unit": "ns",
            "range": "± 81749.02869643441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19630.434782608696,
            "unit": "ns",
            "range": "± 1463.0796310143078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87241.66666666667,
            "unit": "ns",
            "range": "± 5372.026309193457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76496.875,
            "unit": "ns",
            "range": "± 5188.052126609856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97474.48979591837,
            "unit": "ns",
            "range": "± 16274.496595217006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5388.297872340426,
            "unit": "ns",
            "range": "± 757.5933006849627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20893.81443298969,
            "unit": "ns",
            "range": "± 2144.023400106955"
          }
        ]
      }
    ]
  }
}