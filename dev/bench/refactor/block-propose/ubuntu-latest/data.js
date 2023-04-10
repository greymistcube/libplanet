window.BENCHMARK_DATA = {
  "lastUpdate": 1681106848170,
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
          "id": "ce471d9b386cefda7fe85d4afa92224edf566391",
          "message": "Removed unnecessary overload",
          "timestamp": "2023-04-10T14:53:42+09:00",
          "tree_id": "40772124c88aad575c334353fcd59a8dfc5b0f5f",
          "url": "https://github.com/greymistcube/libplanet/commit/ce471d9b386cefda7fe85d4afa92224edf566391"
        },
        "date": 1681106841275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8364590.476190476,
            "unit": "ns",
            "range": "± 189639.683875137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22123327,
            "unit": "ns",
            "range": "± 125726.35415365081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55152950.13333333,
            "unit": "ns",
            "range": "± 219071.47845749426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111337227.71428572,
            "unit": "ns",
            "range": "± 510829.8201973287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221667971.8,
            "unit": "ns",
            "range": "± 879962.5934420817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49735.85294117647,
            "unit": "ns",
            "range": "± 2360.4497058551824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1476320.6875,
            "unit": "ns",
            "range": "± 90378.12719706402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2736705.565217391,
            "unit": "ns",
            "range": "± 68544.54757563015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2385525.8235294116,
            "unit": "ns",
            "range": "± 114213.04065621641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6093792.98,
            "unit": "ns",
            "range": "± 381925.6802563191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5933490.628348215,
            "unit": "ns",
            "range": "± 20367.151586987133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854221.7052083334,
            "unit": "ns",
            "range": "± 1852.299622719448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371802.084375,
            "unit": "ns",
            "range": "± 3331.588718818162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652167.75703125,
            "unit": "ns",
            "range": "± 1933.1951239866687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832668.5694661458,
            "unit": "ns",
            "range": "± 871.0241399690834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755676.6871744791,
            "unit": "ns",
            "range": "± 309.6504537982019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342250.3125,
            "unit": "ns",
            "range": "± 8747.349428725585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284575.8292682927,
            "unit": "ns",
            "range": "± 10150.925260542605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235684.58823529413,
            "unit": "ns",
            "range": "± 4610.697141686162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5722979.066666666,
            "unit": "ns",
            "range": "± 68466.14553033456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174193.1428571427,
            "unit": "ns",
            "range": "± 35918.21228388642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20444.922222222223,
            "unit": "ns",
            "range": "± 1467.9054192029348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95753.25581395348,
            "unit": "ns",
            "range": "± 4971.165412387595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85009.36842105263,
            "unit": "ns",
            "range": "± 5679.752628065189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 206423.9693877551,
            "unit": "ns",
            "range": "± 16990.75809577537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7397.020833333333,
            "unit": "ns",
            "range": "± 713.5335492303028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22058.957894736843,
            "unit": "ns",
            "range": "± 2263.5676694000044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3583701.5405405406,
            "unit": "ns",
            "range": "± 120727.52486478581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3720933.64,
            "unit": "ns",
            "range": "± 96964.36404717629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4266165.318181818,
            "unit": "ns",
            "range": "± 81322.63572157179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4631273.85,
            "unit": "ns",
            "range": "± 163809.45764383284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7406873.0625,
            "unit": "ns",
            "range": "± 225312.56076864645"
          }
        ]
      }
    ]
  }
}