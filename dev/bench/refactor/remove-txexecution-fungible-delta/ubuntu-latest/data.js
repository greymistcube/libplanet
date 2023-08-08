window.BENCHMARK_DATA = {
  "lastUpdate": 1691462998171,
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
          "id": "8baa1b4083c0287391fb9c277de7b85761d2f44a",
          "message": "Removed FungibleAssetsDelta and ExceptionMetadata",
          "timestamp": "2023-08-07T12:06:49+09:00",
          "tree_id": "89104245f00df6627deea8fceab4446cec039eb5",
          "url": "https://github.com/greymistcube/libplanet/commit/8baa1b4083c0287391fb9c277de7b85761d2f44a"
        },
        "date": 1691378505587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3672665.527777778,
            "unit": "ns",
            "range": "± 122123.83359653222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3891316.3333333335,
            "unit": "ns",
            "range": "± 65287.39363183443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4653381.933333334,
            "unit": "ns",
            "range": "± 84828.84299868316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4217512.083333333,
            "unit": "ns",
            "range": "± 106974.96672095427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6784075.541666667,
            "unit": "ns",
            "range": "± 171162.2527570485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8239484.384615385,
            "unit": "ns",
            "range": "± 84743.22876346174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22596899.466666665,
            "unit": "ns",
            "range": "± 288576.0514466721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56819848.8,
            "unit": "ns",
            "range": "± 466236.21446923236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113024613.73333333,
            "unit": "ns",
            "range": "± 933442.7716857378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226782817.73333332,
            "unit": "ns",
            "range": "± 2532396.2042384306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50428.043956043955,
            "unit": "ns",
            "range": "± 3184.350769037328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6178081.788541666,
            "unit": "ns",
            "range": "± 34073.43163923324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1960302.7503004808,
            "unit": "ns",
            "range": "± 4136.281584971287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415831.767578125,
            "unit": "ns",
            "range": "± 3021.429526294105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652400.676339286,
            "unit": "ns",
            "range": "± 8390.48796194989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850330.2130208333,
            "unit": "ns",
            "range": "± 1716.536146053292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770728.9254807692,
            "unit": "ns",
            "range": "± 694.8132121602283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300139.52777777775,
            "unit": "ns",
            "range": "± 9438.361814534528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293099.3076923077,
            "unit": "ns",
            "range": "± 7747.190586369905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257970.0819672131,
            "unit": "ns",
            "range": "± 11493.623242614549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4583064.2,
            "unit": "ns",
            "range": "± 58529.02417628856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4291321.066666666,
            "unit": "ns",
            "range": "± 67286.84329736244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22660.882978723403,
            "unit": "ns",
            "range": "± 2069.5825502732023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99035.15384615384,
            "unit": "ns",
            "range": "± 5522.701892940683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80717.51515151515,
            "unit": "ns",
            "range": "± 3816.9004914073093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101044.79310344828,
            "unit": "ns",
            "range": "± 8381.762565289122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6469.459183673469,
            "unit": "ns",
            "range": "± 838.9420088380014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21832.891304347828,
            "unit": "ns",
            "range": "± 2156.4727430116354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564284.47,
            "unit": "ns",
            "range": "± 116708.42552980292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2992960.897959184,
            "unit": "ns",
            "range": "± 111714.50088268996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1954316.4948453608,
            "unit": "ns",
            "range": "± 127660.16484230732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5074856.696969697,
            "unit": "ns",
            "range": "± 157762.47887557995"
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
          "id": "6f1cbb681a08f35155b7455926cad8dd9ba21871",
          "message": "Changelog",
          "timestamp": "2023-08-08T11:36:20+09:00",
          "tree_id": "b2c837c3bee4029f0e2efadb719459f3355923b1",
          "url": "https://github.com/greymistcube/libplanet/commit/6f1cbb681a08f35155b7455926cad8dd9ba21871"
        },
        "date": 1691462990083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3339608.590909091,
            "unit": "ns",
            "range": "± 77992.77076917607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3380337.0263157897,
            "unit": "ns",
            "range": "± 111492.04175780265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4306878.230769231,
            "unit": "ns",
            "range": "± 61074.816940855206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3865859.05,
            "unit": "ns",
            "range": "± 84337.31145663947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6307849.358974359,
            "unit": "ns",
            "range": "± 215671.92478910222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7446818.666666667,
            "unit": "ns",
            "range": "± 12299.490126869177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19305910.466666665,
            "unit": "ns",
            "range": "± 60525.1881709079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50012657.13333333,
            "unit": "ns",
            "range": "± 513055.20791373856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100784229.46666667,
            "unit": "ns",
            "range": "± 1136969.064638704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200856657.2857143,
            "unit": "ns",
            "range": "± 866349.922454097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47430.755319148935,
            "unit": "ns",
            "range": "± 2785.436965724618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6086793.880208333,
            "unit": "ns",
            "range": "± 35377.33438090034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2050900.9910714286,
            "unit": "ns",
            "range": "± 1643.8381296685054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347033.4094587055,
            "unit": "ns",
            "range": "± 496.5091462741122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626926.535714286,
            "unit": "ns",
            "range": "± 970.0060025153997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793292.80859375,
            "unit": "ns",
            "range": "± 514.1072691752064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750038.6671424279,
            "unit": "ns",
            "range": "± 394.29931538060816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280916.27777777775,
            "unit": "ns",
            "range": "± 7950.109568377429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270290.9428571428,
            "unit": "ns",
            "range": "± 8634.016081900763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245841.18055555556,
            "unit": "ns",
            "range": "± 12046.553206209614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4348223.333333333,
            "unit": "ns",
            "range": "± 61963.00728391632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4013873.8666666667,
            "unit": "ns",
            "range": "± 39645.49634099452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20665.195652173912,
            "unit": "ns",
            "range": "± 1939.097327319094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91430.53608247422,
            "unit": "ns",
            "range": "± 9350.85902812082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74304.2957746479,
            "unit": "ns",
            "range": "± 3615.521497236863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88529.9587628866,
            "unit": "ns",
            "range": "± 10615.314190001558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4881.65306122449,
            "unit": "ns",
            "range": "± 737.7257907312987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19944.71875,
            "unit": "ns",
            "range": "± 1715.4358949081932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1389677.5979381443,
            "unit": "ns",
            "range": "± 97716.86333672359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2610398.8235294116,
            "unit": "ns",
            "range": "± 82645.30952115009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1791285.59375,
            "unit": "ns",
            "range": "± 129830.97225292001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4672128.153846154,
            "unit": "ns",
            "range": "± 162567.399256033"
          }
        ]
      }
    ]
  }
}