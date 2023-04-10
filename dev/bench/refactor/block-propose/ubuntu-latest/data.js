window.BENCHMARK_DATA = {
  "lastUpdate": 1681106871024,
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
          "id": "5841e330c397ad6efec76dec442678bb1aaca5f8",
          "message": "Cleanup",
          "timestamp": "2023-04-10T14:55:23+09:00",
          "tree_id": "cd01a23fb276887eb567d50a9df864b11d2670d7",
          "url": "https://github.com/greymistcube/libplanet/commit/5841e330c397ad6efec76dec442678bb1aaca5f8"
        },
        "date": 1681106863176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7668544.6,
            "unit": "ns",
            "range": "± 59938.09399443491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20142847.2,
            "unit": "ns",
            "range": "± 120987.88680997308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50151761.666666664,
            "unit": "ns",
            "range": "± 509166.12883092155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99941183.38461539,
            "unit": "ns",
            "range": "± 658028.738833082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200921263.92857143,
            "unit": "ns",
            "range": "± 1548269.1617560193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46970.625,
            "unit": "ns",
            "range": "± 2320.2637261317554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402020.9591836734,
            "unit": "ns",
            "range": "± 93927.78063879863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2605049.619047619,
            "unit": "ns",
            "range": "± 57121.724183953156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2230594.775,
            "unit": "ns",
            "range": "± 105924.21829731905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5647443.214285715,
            "unit": "ns",
            "range": "± 203528.94975774217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6021584.578683035,
            "unit": "ns",
            "range": "± 13328.40157540074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920468.8842447917,
            "unit": "ns",
            "range": "± 7689.316985987369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368599.4685997595,
            "unit": "ns",
            "range": "± 811.4710413119167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556380.416341146,
            "unit": "ns",
            "range": "± 2971.605468662221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800412.1386067708,
            "unit": "ns",
            "range": "± 675.764282266605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720593.1168619791,
            "unit": "ns",
            "range": "± 627.6471362794814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323667.76923076925,
            "unit": "ns",
            "range": "± 2992.007774996754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268408.65,
            "unit": "ns",
            "range": "± 5928.868466419647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240734.45,
            "unit": "ns",
            "range": "± 5529.343593620836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5585109.230769231,
            "unit": "ns",
            "range": "± 14794.040388806601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3978489.0714285714,
            "unit": "ns",
            "range": "± 30645.552445449783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19145.24742268041,
            "unit": "ns",
            "range": "± 2008.7875179597756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84442.47142857143,
            "unit": "ns",
            "range": "± 3690.675597873249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72815.96774193548,
            "unit": "ns",
            "range": "± 2099.068848860862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 199439.2,
            "unit": "ns",
            "range": "± 3723.9261385954323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4809.183673469388,
            "unit": "ns",
            "range": "± 641.5327545765796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18623.854166666668,
            "unit": "ns",
            "range": "± 1324.8069728646801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3263030.65,
            "unit": "ns",
            "range": "± 73380.03770370637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3459450.8,
            "unit": "ns",
            "range": "± 47956.788487434926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4295805.125,
            "unit": "ns",
            "range": "± 72097.18871252886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4270683.7,
            "unit": "ns",
            "range": "± 179129.2648228543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7324477.619047619,
            "unit": "ns",
            "range": "± 173024.7335604006"
          }
        ]
      }
    ]
  }
}