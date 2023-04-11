window.BENCHMARK_DATA = {
  "lastUpdate": 1681188186166,
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
          "id": "510331dc7accb4078a3b69355e76012f61afc8b9",
          "message": "Cleanup",
          "timestamp": "2023-04-10T14:55:57+09:00",
          "tree_id": "1fe94d209619d87dda3737690767b19bc5d1c75a",
          "url": "https://github.com/greymistcube/libplanet/commit/510331dc7accb4078a3b69355e76012f61afc8b9"
        },
        "date": 1681106900431,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7590623.866666666,
            "unit": "ns",
            "range": "± 35484.358612264776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19972633.6,
            "unit": "ns",
            "range": "± 253709.35931770434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50330279.13333333,
            "unit": "ns",
            "range": "± 857039.3031828376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101910869.07142857,
            "unit": "ns",
            "range": "± 1551713.8451211078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197796430.5,
            "unit": "ns",
            "range": "± 1622869.068965338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49552.42857142857,
            "unit": "ns",
            "range": "± 1956.1618622110063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1389295.606060606,
            "unit": "ns",
            "range": "± 99473.10963914821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2674588.48,
            "unit": "ns",
            "range": "± 70284.36285080298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2300178.8205128205,
            "unit": "ns",
            "range": "± 118455.92997208616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5520343.565217392,
            "unit": "ns",
            "range": "± 124357.56867006385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5882585.7265625,
            "unit": "ns",
            "range": "± 34137.86633962639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845716.4354166666,
            "unit": "ns",
            "range": "± 8210.164156017405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332903.11328125,
            "unit": "ns",
            "range": "± 6178.974779891246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603324.8889508927,
            "unit": "ns",
            "range": "± 11263.158242399355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818712.9419921875,
            "unit": "ns",
            "range": "± 2178.71183829811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755500.4794921875,
            "unit": "ns",
            "range": "± 343.9455732185843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326849.73913043475,
            "unit": "ns",
            "range": "± 11722.72547838368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266432.6,
            "unit": "ns",
            "range": "± 7973.754282126089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226264.15384615384,
            "unit": "ns",
            "range": "± 1612.011881994766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5682071.533333333,
            "unit": "ns",
            "range": "± 74966.57777862143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3949911.3333333335,
            "unit": "ns",
            "range": "± 63195.9324026325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18080.22105263158,
            "unit": "ns",
            "range": "± 1372.7424653400271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87083.44594594595,
            "unit": "ns",
            "range": "± 4377.053175029763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78577.6,
            "unit": "ns",
            "range": "± 2295.692932728441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 183836.33333333334,
            "unit": "ns",
            "range": "± 19422.62642799381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5462.958762886598,
            "unit": "ns",
            "range": "± 592.0507952153432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18068.696629213482,
            "unit": "ns",
            "range": "± 1336.8118569982976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3327975.0588235296,
            "unit": "ns",
            "range": "± 65547.39979727512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3415387.1707317075,
            "unit": "ns",
            "range": "± 121586.62283468983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4198163.76,
            "unit": "ns",
            "range": "± 110560.84259254418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4273627.649122807,
            "unit": "ns",
            "range": "± 183532.07821109047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7136677.5625,
            "unit": "ns",
            "range": "± 122705.43383673968"
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
          "id": "9c5ecdafd81d5fd4fcc2b0c6f4b6fb6c66ce450f",
          "message": "[skip changelog] Simple renaming",
          "timestamp": "2023-04-10T18:24:59+09:00",
          "tree_id": "8aa3d233e946edd28cf7b4d11cb181eb4d19981d",
          "url": "https://github.com/greymistcube/libplanet/commit/9c5ecdafd81d5fd4fcc2b0c6f4b6fb6c66ce450f"
        },
        "date": 1681119430946,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7529624.928571428,
            "unit": "ns",
            "range": "± 54899.973028526765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19525375.333333332,
            "unit": "ns",
            "range": "± 120760.31236808762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50200803.928571425,
            "unit": "ns",
            "range": "± 221349.81626426816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100696220.85714285,
            "unit": "ns",
            "range": "± 271959.1745614254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201035116,
            "unit": "ns",
            "range": "± 502374.7436141954"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45378.48484848485,
            "unit": "ns",
            "range": "± 2139.545848592275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1430263.01,
            "unit": "ns",
            "range": "± 128398.51047402926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2605663.909090909,
            "unit": "ns",
            "range": "± 62727.6009196446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282600.723404255,
            "unit": "ns",
            "range": "± 131628.73955225816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5444681.157894737,
            "unit": "ns",
            "range": "± 87337.93753910607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5997916.740513393,
            "unit": "ns",
            "range": "± 29772.743378440806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836404.9876302083,
            "unit": "ns",
            "range": "± 778.6941395360394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340448.7430989584,
            "unit": "ns",
            "range": "± 685.4670219374478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2521692.5462740385,
            "unit": "ns",
            "range": "± 1390.5447480956943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791691.4551432292,
            "unit": "ns",
            "range": "± 808.5835653423347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734803.0022786459,
            "unit": "ns",
            "range": "± 409.14557803241536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332556,
            "unit": "ns",
            "range": "± 7656.730287792564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266899.06666666665,
            "unit": "ns",
            "range": "± 3252.5682262892915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238884.92857142858,
            "unit": "ns",
            "range": "± 3656.032222217155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5582176.333333333,
            "unit": "ns",
            "range": "± 36355.6925522315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3992134.1333333333,
            "unit": "ns",
            "range": "± 51124.75252034641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18774.705263157895,
            "unit": "ns",
            "range": "± 1517.1495520448457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86077.48611111111,
            "unit": "ns",
            "range": "± 4088.2454757789333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75321.83333333333,
            "unit": "ns",
            "range": "± 1565.5862743243954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 180671.5483870968,
            "unit": "ns",
            "range": "± 13524.203168294507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4928.835051546392,
            "unit": "ns",
            "range": "± 622.824140515275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17877.606382978724,
            "unit": "ns",
            "range": "± 1499.978015739149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3217375.4444444445,
            "unit": "ns",
            "range": "± 64761.99303445557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3423803.896551724,
            "unit": "ns",
            "range": "± 97504.58685413758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4203174.733333333,
            "unit": "ns",
            "range": "± 66252.43087881668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4301026.451612903,
            "unit": "ns",
            "range": "± 127157.9866640547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7245242.761904762,
            "unit": "ns",
            "range": "± 165555.42990276846"
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
          "id": "93b65fd33ff676df90ddf152ef633975c9968bc5",
          "message": "Removed timestamp from ProposeBlock() entirely",
          "timestamp": "2023-04-11T11:42:15+09:00",
          "tree_id": "751e7bbf7a2871d12d69afd4d4aab733c82f5399",
          "url": "https://github.com/greymistcube/libplanet/commit/93b65fd33ff676df90ddf152ef633975c9968bc5"
        },
        "date": 1681181919219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10519039.3,
            "unit": "ns",
            "range": "± 464245.39066179434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25022759.852459017,
            "unit": "ns",
            "range": "± 1118288.1968163638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65166043.60714286,
            "unit": "ns",
            "range": "± 1839305.3055399968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125270642.5,
            "unit": "ns",
            "range": "± 4015630.872432747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238674314,
            "unit": "ns",
            "range": "± 4826600.354026485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56194.96666666667,
            "unit": "ns",
            "range": "± 3484.964631387595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1629032.0408163266,
            "unit": "ns",
            "range": "± 133459.7327619268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3052643.681318681,
            "unit": "ns",
            "range": "± 164746.06340195736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2647087.1958762887,
            "unit": "ns",
            "range": "± 161253.95294732566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7166317.778947368,
            "unit": "ns",
            "range": "± 725004.4363117121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7348027.1015625,
            "unit": "ns",
            "range": "± 133628.6311154416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2107826.7354166666,
            "unit": "ns",
            "range": "± 20155.0889974178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1616847.7953404018,
            "unit": "ns",
            "range": "± 21923.640888111444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3039164.173314145,
            "unit": "ns",
            "range": "± 64141.36569859947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985601.529296875,
            "unit": "ns",
            "range": "± 10503.26072820958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917837.8436197917,
            "unit": "ns",
            "range": "± 8164.299964243342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393590.55263157893,
            "unit": "ns",
            "range": "± 13476.249347282352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322652.22222222225,
            "unit": "ns",
            "range": "± 9000.878082521185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275783.1095890411,
            "unit": "ns",
            "range": "± 13741.783281859789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6729324.461538462,
            "unit": "ns",
            "range": "± 169877.17616989772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4604696.875,
            "unit": "ns",
            "range": "± 179291.32518496198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22028.106382978724,
            "unit": "ns",
            "range": "± 2162.334911185329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102985.56701030929,
            "unit": "ns",
            "range": "± 8071.768769022499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96153.53125,
            "unit": "ns",
            "range": "± 9412.733098200571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 212927.21649484537,
            "unit": "ns",
            "range": "± 19957.27846771845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7281.822916666667,
            "unit": "ns",
            "range": "± 1268.3363989663717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21080.54945054945,
            "unit": "ns",
            "range": "± 1814.5105876041266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3862375.0689655175,
            "unit": "ns",
            "range": "± 169175.41822325342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4043125.9789473685,
            "unit": "ns",
            "range": "± 231869.7352544706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4938552.333333333,
            "unit": "ns",
            "range": "± 88618.61661691204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5344445.472222222,
            "unit": "ns",
            "range": "± 176351.57612912843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9134299.252873564,
            "unit": "ns",
            "range": "± 497477.28072114283"
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
          "id": "db6803aad6a81124e322b2e28d7f78a92f59f33c",
          "message": "Added test",
          "timestamp": "2023-04-11T12:02:54+09:00",
          "tree_id": "d127e88d7dafb7a955ef340f8e62db05d03a3cd7",
          "url": "https://github.com/greymistcube/libplanet/commit/db6803aad6a81124e322b2e28d7f78a92f59f33c"
        },
        "date": 1681183021057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7823848.733333333,
            "unit": "ns",
            "range": "± 134326.76810857633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21841485.666666668,
            "unit": "ns",
            "range": "± 501884.1753880404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55615694.53333333,
            "unit": "ns",
            "range": "± 583162.7478029815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109717180.2,
            "unit": "ns",
            "range": "± 1428391.677416107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220946358.46666667,
            "unit": "ns",
            "range": "± 3469470.2804912427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51214.296703296706,
            "unit": "ns",
            "range": "± 3194.602480902594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523783.28,
            "unit": "ns",
            "range": "± 110992.88563506026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2693803.4285714286,
            "unit": "ns",
            "range": "± 77143.4342571985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2374020.8695652173,
            "unit": "ns",
            "range": "± 109126.24070609463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5680462.833333333,
            "unit": "ns",
            "range": "± 169720.10807047592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6175534.234895834,
            "unit": "ns",
            "range": "± 23980.24155016037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863302.4557291667,
            "unit": "ns",
            "range": "± 3043.873811413143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375612.4708333334,
            "unit": "ns",
            "range": "± 3360.16635489898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645614.3559895833,
            "unit": "ns",
            "range": "± 2719.7531375408284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824221.4481770833,
            "unit": "ns",
            "range": "± 1424.027069114096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757531.940234375,
            "unit": "ns",
            "range": "± 1187.401139735601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353918.0714285714,
            "unit": "ns",
            "range": "± 8385.706670584143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292405.2340425532,
            "unit": "ns",
            "range": "± 11312.554367321223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247656.79166666666,
            "unit": "ns",
            "range": "± 5678.371490207126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5998308.2,
            "unit": "ns",
            "range": "± 100861.93569372795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4214685,
            "unit": "ns",
            "range": "± 74507.04770499423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25534.79381443299,
            "unit": "ns",
            "range": "± 2253.365066675025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101381,
            "unit": "ns",
            "range": "± 11281.95600921841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86491.92631578947,
            "unit": "ns",
            "range": "± 7583.1412191671625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 204078.17708333334,
            "unit": "ns",
            "range": "± 15977.95287987386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7723.540816326531,
            "unit": "ns",
            "range": "± 863.1797983596662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22756.5,
            "unit": "ns",
            "range": "± 2228.13296399994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3482368.272727273,
            "unit": "ns",
            "range": "± 83553.34632276316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3691396.024390244,
            "unit": "ns",
            "range": "± 131399.22752388765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4306672.875,
            "unit": "ns",
            "range": "± 121294.20353587893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4733418.521739131,
            "unit": "ns",
            "range": "± 179394.73554219777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7541732.565217392,
            "unit": "ns",
            "range": "± 179233.91590671925"
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
          "id": "bcb5e135f73fbddbfba643ddceb61a9230e70148",
          "message": "Reduced expose level for custom ProposeBlock()",
          "timestamp": "2023-04-11T13:24:05+09:00",
          "tree_id": "74dd7ab342a5fee24792deb260801bfe6121fac4",
          "url": "https://github.com/greymistcube/libplanet/commit/bcb5e135f73fbddbfba643ddceb61a9230e70148"
        },
        "date": 1681188177382,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8883704.364583334,
            "unit": "ns",
            "range": "± 600802.5941537855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23640154.87654321,
            "unit": "ns",
            "range": "± 1243773.0526293414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61832733.185567014,
            "unit": "ns",
            "range": "± 4175360.354365762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120146371.02564102,
            "unit": "ns",
            "range": "± 6185678.833843533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258853948.5670103,
            "unit": "ns",
            "range": "± 22865036.77049485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62678.88421052632,
            "unit": "ns",
            "range": "± 11271.979670812761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666331.6736842105,
            "unit": "ns",
            "range": "± 233669.71859968553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3264998.9484536084,
            "unit": "ns",
            "range": "± 307152.88185403193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2686217.6736842105,
            "unit": "ns",
            "range": "± 269932.15771609114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7254246.463157895,
            "unit": "ns",
            "range": "± 489581.1312125476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6859456.139583333,
            "unit": "ns",
            "range": "± 118354.0931389777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2188662.242447917,
            "unit": "ns",
            "range": "± 36179.97988069192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1555313.613671875,
            "unit": "ns",
            "range": "± 20001.569317392285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2990444.4402901786,
            "unit": "ns",
            "range": "± 44688.988084321674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029967.4492885044,
            "unit": "ns",
            "range": "± 33504.200582389974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 967691.317265625,
            "unit": "ns",
            "range": "± 25558.93726206982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 422989.9052631579,
            "unit": "ns",
            "range": "± 30644.70021621999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339582.95789473684,
            "unit": "ns",
            "range": "± 31059.98134218583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284919.6195652174,
            "unit": "ns",
            "range": "± 19952.229311033203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6721082.373626374,
            "unit": "ns",
            "range": "± 402560.54091523914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4545598.234042553,
            "unit": "ns",
            "range": "± 306306.32988528674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26503.0202020202,
            "unit": "ns",
            "range": "± 8219.973569871356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104526.16666666667,
            "unit": "ns",
            "range": "± 13915.273880593575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88819.23157894737,
            "unit": "ns",
            "range": "± 14320.966191888207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 226033.26666666666,
            "unit": "ns",
            "range": "± 22673.41478759512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11140.45,
            "unit": "ns",
            "range": "± 5833.097505839091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25374.45918367347,
            "unit": "ns",
            "range": "± 7523.551397600568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4050625.152173913,
            "unit": "ns",
            "range": "± 321766.7974906752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4321227.385416667,
            "unit": "ns",
            "range": "± 384062.32053099136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5202677.818181818,
            "unit": "ns",
            "range": "± 410547.2849821462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5110997.333333333,
            "unit": "ns",
            "range": "± 377100.02866082225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9546838.468085106,
            "unit": "ns",
            "range": "± 679766.6220139782"
          }
        ]
      }
    ]
  }
}