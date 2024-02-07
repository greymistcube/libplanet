window.BENCHMARK_DATA = {
  "lastUpdate": 1707287222297,
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
          "id": "db763b0d5205886da9a7c7240b3b551bd24e2768",
          "message": "Revert query argument type to be compatible with legacy queries",
          "timestamp": "2024-02-07T15:15:42+09:00",
          "tree_id": "f9cfa42ebc5d7a160cad261c75e8cfbd601eda52",
          "url": "https://github.com/greymistcube/libplanet/commit/db763b0d5205886da9a7c7240b3b551bd24e2768"
        },
        "date": 1707287215885,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198467.13333333333,
            "unit": "ns",
            "range": "± 8886.894475720912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193920.90384615384,
            "unit": "ns",
            "range": "± 7899.946317165869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166718.9375,
            "unit": "ns",
            "range": "± 3109.2049673777806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3255502.9,
            "unit": "ns",
            "range": "± 46194.409942886254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2862757.533333333,
            "unit": "ns",
            "range": "± 51662.26962530872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13951.721649484536,
            "unit": "ns",
            "range": "± 2361.2423140084375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65200.765957446805,
            "unit": "ns",
            "range": "± 7071.715199201223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53175.5,
            "unit": "ns",
            "range": "± 1412.973722819823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65844.67346938775,
            "unit": "ns",
            "range": "± 16103.468964039508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6806.680412371134,
            "unit": "ns",
            "range": "± 1049.787067163223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17657.74226804124,
            "unit": "ns",
            "range": "± 1569.3163737114862"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42190.463917525776,
            "unit": "ns",
            "range": "± 6021.1642078550985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2592258.6333333333,
            "unit": "ns",
            "range": "± 47305.28772447366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486494.1463414636,
            "unit": "ns",
            "range": "± 87710.96395849295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3204514.095238095,
            "unit": "ns",
            "range": "± 75414.78257006696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3248732.28125,
            "unit": "ns",
            "range": "± 97216.56403675197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13735197.75,
            "unit": "ns",
            "range": "± 864871.8407742332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969793.8020833334,
            "unit": "ns",
            "range": "± 80890.30948553528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1859067.962686567,
            "unit": "ns",
            "range": "± 80236.60980279709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623454.6597938144,
            "unit": "ns",
            "range": "± 208783.0073405005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12657222.688888889,
            "unit": "ns",
            "range": "± 929325.2732868133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5570200.285714285,
            "unit": "ns",
            "range": "± 15312.512938411219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14331163.933333334,
            "unit": "ns",
            "range": "± 100924.33726274259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35890322.64285714,
            "unit": "ns",
            "range": "± 103130.28369726335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74046488.92307693,
            "unit": "ns",
            "range": "± 661047.8235857147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148162636,
            "unit": "ns",
            "range": "± 582649.6259349753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3648003.6796875,
            "unit": "ns",
            "range": "± 4984.981502792422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203274.1654575893,
            "unit": "ns",
            "range": "± 1957.6168647034074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764366.7627766927,
            "unit": "ns",
            "range": "± 2876.929410846896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940372.524576823,
            "unit": "ns",
            "range": "± 7114.819977192549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614212.9491489956,
            "unit": "ns",
            "range": "± 3497.3266043347076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581786.4553786058,
            "unit": "ns",
            "range": "± 2349.0248674102286"
          }
        ]
      }
    ]
  }
}