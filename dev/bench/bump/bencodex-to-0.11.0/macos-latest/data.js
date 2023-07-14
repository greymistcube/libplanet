window.BENCHMARK_DATA = {
  "lastUpdate": 1689321524296,
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
          "id": "639b3c048cc8a77e48c723374264fcd3544a0b1e",
          "message": "Fix package references",
          "timestamp": "2023-07-14T16:42:36+09:00",
          "tree_id": "968f82627aae9c0bbbdeff1c7db89e4204d978b2",
          "url": "https://github.com/greymistcube/libplanet/commit/639b3c048cc8a77e48c723374264fcd3544a0b1e"
        },
        "date": 1689321506440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7807018.076923077,
            "unit": "ns",
            "range": "± 58666.74937086245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20320521.684210528,
            "unit": "ns",
            "range": "± 446867.83379404654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50758286.13043478,
            "unit": "ns",
            "range": "± 1245204.3096670487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98621868.46666667,
            "unit": "ns",
            "range": "± 678040.3738785837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201486219.84615386,
            "unit": "ns",
            "range": "± 856817.9661520727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66644.20103092784,
            "unit": "ns",
            "range": "± 8034.311113339862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336132.5465116279,
            "unit": "ns",
            "range": "± 17581.36275696309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312044.92253521126,
            "unit": "ns",
            "range": "± 15162.10823322589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330934.1111111111,
            "unit": "ns",
            "range": "± 6897.3148325049515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4294039.933333334,
            "unit": "ns",
            "range": "± 62045.89750046408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4016920.0588235296,
            "unit": "ns",
            "range": "± 81893.48006592969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22351.444444444445,
            "unit": "ns",
            "range": "± 4649.210238445863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102676.32323232324,
            "unit": "ns",
            "range": "± 14162.535600278243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111464.40404040404,
            "unit": "ns",
            "range": "± 12708.87836130445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120301.05376344085,
            "unit": "ns",
            "range": "± 14492.611554172061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6908.416666666667,
            "unit": "ns",
            "range": "± 906.0384872348841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18729.315217391304,
            "unit": "ns",
            "range": "± 2192.8464713241674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635032.9157894736,
            "unit": "ns",
            "range": "± 167367.85806672648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2963341.785714286,
            "unit": "ns",
            "range": "± 127764.6287738649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2148196.2395833335,
            "unit": "ns",
            "range": "± 219231.22201292138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6155360.354838709,
            "unit": "ns",
            "range": "± 269621.91923087573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3283265.185714286,
            "unit": "ns",
            "range": "± 106129.45997993965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550546.2608695654,
            "unit": "ns",
            "range": "± 88822.39591260825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4452266.119047619,
            "unit": "ns",
            "range": "± 161187.19156540194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3858357.873015873,
            "unit": "ns",
            "range": "± 176927.7443720925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7177192.6,
            "unit": "ns",
            "range": "± 281677.0423940097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6857158.2140625,
            "unit": "ns",
            "range": "± 22888.509976557587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953106.4287860577,
            "unit": "ns",
            "range": "± 7771.125013076113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296262.8688802083,
            "unit": "ns",
            "range": "± 15394.37535073755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645231.9821428573,
            "unit": "ns",
            "range": "± 142028.29079995534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855142.3697265625,
            "unit": "ns",
            "range": "± 3904.423278516907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 803883.7098958333,
            "unit": "ns",
            "range": "± 1928.105071541478"
          }
        ]
      }
    ]
  }
}