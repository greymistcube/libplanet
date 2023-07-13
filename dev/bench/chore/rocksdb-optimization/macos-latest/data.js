window.BENCHMARK_DATA = {
  "lastUpdate": 1689214609899,
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
          "id": "3ce762868d821b2401cedc45be76202d31c80175",
          "message": "RocksDBStore Concat optimization",
          "timestamp": "2023-07-13T04:11:48+09:00",
          "tree_id": "ee5cdbe513ebd68a9a69d4ef74a3ade03e5b40a4",
          "url": "https://github.com/greymistcube/libplanet/commit/3ce762868d821b2401cedc45be76202d31c80175"
        },
        "date": 1689190762286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8453101.470588235,
            "unit": "ns",
            "range": "± 169335.16154106832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22013688.719101124,
            "unit": "ns",
            "range": "± 1831876.499468156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52302712.353658535,
            "unit": "ns",
            "range": "± 1570110.0701522739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105973671.35185185,
            "unit": "ns",
            "range": "± 4421619.153285597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227353613.9,
            "unit": "ns",
            "range": "± 13431600.925947635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96713.10309278351,
            "unit": "ns",
            "range": "± 27097.04582894467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340060.43506493507,
            "unit": "ns",
            "range": "± 18930.31418007251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326979.7738095238,
            "unit": "ns",
            "range": "± 22605.70783681951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320888.14864864864,
            "unit": "ns",
            "range": "± 10838.525868955243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4292158.36,
            "unit": "ns",
            "range": "± 57774.10709239334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4900111.13,
            "unit": "ns",
            "range": "± 1329388.215335681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26305.48969072165,
            "unit": "ns",
            "range": "± 5115.206242776787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133114.12121212122,
            "unit": "ns",
            "range": "± 29328.83873800413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133479.24193548388,
            "unit": "ns",
            "range": "± 12182.340299458445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134526.57142857142,
            "unit": "ns",
            "range": "± 19148.187592628034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8177.737113402062,
            "unit": "ns",
            "range": "± 1440.3864988634987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22533.844086021505,
            "unit": "ns",
            "range": "± 3999.925549564271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655286.7608695652,
            "unit": "ns",
            "range": "± 160043.47816767832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3113532.1566265062,
            "unit": "ns",
            "range": "± 186437.9402569543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3261855.6,
            "unit": "ns",
            "range": "± 909704.3934390018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9616474.1,
            "unit": "ns",
            "range": "± 2763306.0185323292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4057253.111111111,
            "unit": "ns",
            "range": "± 1060170.8844331913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3545367.822222222,
            "unit": "ns",
            "range": "± 133689.50720679222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4513180,
            "unit": "ns",
            "range": "± 177079.945243025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3938885.3076923075,
            "unit": "ns",
            "range": "± 240804.32359809068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7277879.533333333,
            "unit": "ns",
            "range": "± 319463.0326994413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7228644.54471009,
            "unit": "ns",
            "range": "± 383909.5697427661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1974746.6600060095,
            "unit": "ns",
            "range": "± 81108.75116577736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1261090.9669363839,
            "unit": "ns",
            "range": "± 9231.970629270629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3321399.363655253,
            "unit": "ns",
            "range": "± 425023.1701997485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939818.1968607089,
            "unit": "ns",
            "range": "± 49707.548826919534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 851653.555709484,
            "unit": "ns",
            "range": "± 28783.88704593459"
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
          "id": "9b76e9209f1db4f75c0c2e6aafb5295d2bedb076",
          "message": "Changelog",
          "timestamp": "2023-07-13T10:58:28+09:00",
          "tree_id": "85b2160af011b1b4f21a7d91f15f1ddcfae72466",
          "url": "https://github.com/greymistcube/libplanet/commit/9b76e9209f1db4f75c0c2e6aafb5295d2bedb076"
        },
        "date": 1689214596270,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8549584.453846155,
            "unit": "ns",
            "range": "± 397798.0202880694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21054654.9,
            "unit": "ns",
            "range": "± 730104.669796149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53363256.43283582,
            "unit": "ns",
            "range": "± 2505093.083107663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105436285.1,
            "unit": "ns",
            "range": "± 3137384.4872430936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213919816.95238096,
            "unit": "ns",
            "range": "± 4968448.922281132"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63441.757731958765,
            "unit": "ns",
            "range": "± 8912.853180564514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347323.07368421054,
            "unit": "ns",
            "range": "± 38427.22488893422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332294.86842105264,
            "unit": "ns",
            "range": "± 35883.247319502865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336814,
            "unit": "ns",
            "range": "± 36269.470965082415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4421332.397849462,
            "unit": "ns",
            "range": "± 249720.47887998002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3976184.597826087,
            "unit": "ns",
            "range": "± 231507.4019181254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17224.91304347826,
            "unit": "ns",
            "range": "± 2223.7260047055756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132181.17441860464,
            "unit": "ns",
            "range": "± 32410.92471753453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114748.52083333333,
            "unit": "ns",
            "range": "± 7487.3105887356505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124814.48936170213,
            "unit": "ns",
            "range": "± 16470.738377462327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7425.989361702128,
            "unit": "ns",
            "range": "± 854.5965626141063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24288.476744186046,
            "unit": "ns",
            "range": "± 2918.5189101433925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1719151.5752688171,
            "unit": "ns",
            "range": "± 177799.06526110464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3098577.0795454546,
            "unit": "ns",
            "range": "± 167302.7635530503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2120805.5730337077,
            "unit": "ns",
            "range": "± 227466.91903004306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6023276.192771085,
            "unit": "ns",
            "range": "± 357957.14588710933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3375419.029411765,
            "unit": "ns",
            "range": "± 108877.22043311692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3440254.610526316,
            "unit": "ns",
            "range": "± 200337.58904819775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4608595.611111111,
            "unit": "ns",
            "range": "± 331857.3289936717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4247342.418367347,
            "unit": "ns",
            "range": "± 258319.68972349702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7747374.126315789,
            "unit": "ns",
            "range": "± 462639.30203803396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7563580.042410715,
            "unit": "ns",
            "range": "± 62001.1478279538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2191364.45703125,
            "unit": "ns",
            "range": "± 29880.430424943825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300067.870703125,
            "unit": "ns",
            "range": "± 15325.212574908755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2867911.164180871,
            "unit": "ns",
            "range": "± 259977.49816325068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887346.5984375,
            "unit": "ns",
            "range": "± 9097.094191997723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782937.853314568,
            "unit": "ns",
            "range": "± 25261.307545701828"
          }
        ]
      }
    ]
  }
}