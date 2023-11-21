window.BENCHMARK_DATA = {
  "lastUpdate": 1700537626367,
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
          "id": "9d18fcc0129e672c0be35eba54d8ce50f8b57fa9",
          "message": "Prepare 3.7.2",
          "timestamp": "2023-11-21T12:23:02+09:00",
          "tree_id": "a4b48bdf93b217e18d7fc507c9f078ceda65c009",
          "url": "https://github.com/greymistcube/libplanet/commit/9d18fcc0129e672c0be35eba54d8ce50f8b57fa9"
        },
        "date": 1700537619160,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200038.04081632654,
            "unit": "ns",
            "range": "± 7253.639698337608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189561.76,
            "unit": "ns",
            "range": "± 9418.58942046798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162876.94444444444,
            "unit": "ns",
            "range": "± 2978.031119661647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3035241.2666666666,
            "unit": "ns",
            "range": "± 54580.58730572707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2729141.0714285714,
            "unit": "ns",
            "range": "± 27268.263075384024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11932.574712643678,
            "unit": "ns",
            "range": "± 844.953729738869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61000.989130434784,
            "unit": "ns",
            "range": "± 4568.669964184193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51872.9,
            "unit": "ns",
            "range": "± 1415.7045505185656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63057.48453608248,
            "unit": "ns",
            "range": "± 15530.835465368968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3151.3956043956046,
            "unit": "ns",
            "range": "± 365.33950357079226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13970.154639175258,
            "unit": "ns",
            "range": "± 1643.76955844008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750940.14453125,
            "unit": "ns",
            "range": "± 9153.099488870024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214456.326171875,
            "unit": "ns",
            "range": "± 5242.002558827077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775277.1482747396,
            "unit": "ns",
            "range": "± 4250.472588130261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952554.7700520833,
            "unit": "ns",
            "range": "± 6888.839890860366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636762.3190104166,
            "unit": "ns",
            "range": "± 9348.707672513947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570905.9782151442,
            "unit": "ns",
            "range": "± 2242.793222814132"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41293.54255319149,
            "unit": "ns",
            "range": "± 5916.422730694392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397393.3205128205,
            "unit": "ns",
            "range": "± 83783.74216519443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511501.263157895,
            "unit": "ns",
            "range": "± 70001.92894308842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3170109.0384615385,
            "unit": "ns",
            "range": "± 83467.88031691269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2919292.64,
            "unit": "ns",
            "range": "± 117180.28490422397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6781080.842105263,
            "unit": "ns",
            "range": "± 231609.61885133543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5623354.642857143,
            "unit": "ns",
            "range": "± 22725.636694498346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14109460.1,
            "unit": "ns",
            "range": "± 96765.28344460262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36637693.083333336,
            "unit": "ns",
            "range": "± 115893.5771429652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75928120.08333333,
            "unit": "ns",
            "range": "± 278518.6302391011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149743078.92857143,
            "unit": "ns",
            "range": "± 498136.43708950386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943505.4725274725,
            "unit": "ns",
            "range": "± 67391.23751157048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1857559.9,
            "unit": "ns",
            "range": "± 74520.22586615567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1408818.822222222,
            "unit": "ns",
            "range": "± 124397.28555779588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5761645.649484536,
            "unit": "ns",
            "range": "± 370056.82129618165"
          }
        ]
      }
    ]
  }
}