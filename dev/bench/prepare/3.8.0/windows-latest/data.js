window.BENCHMARK_DATA = {
  "lastUpdate": 1698979701419,
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
          "id": "3cf2b69679f69efe3e013b93a465dfa18cd823eb",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T11:30:24+09:00",
          "tree_id": "433e7e18bf05b1ccd8d1d5fc493971275c2c56c6",
          "url": "https://github.com/greymistcube/libplanet/commit/3cf2b69679f69efe3e013b93a465dfa18cd823eb"
        },
        "date": 1698979674969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532709.4736842106,
            "unit": "ns",
            "range": "± 146399.39474476984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2901417.5,
            "unit": "ns",
            "range": "± 102505.95952031027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2243061.111111111,
            "unit": "ns",
            "range": "± 110200.69598660048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10280760.227272727,
            "unit": "ns",
            "range": "± 588788.4038361335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59231.57894736842,
            "unit": "ns",
            "range": "± 4639.498853115788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9342139.130434783,
            "unit": "ns",
            "range": "± 231719.4242635426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24340666.666666668,
            "unit": "ns",
            "range": "± 399424.5372437464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62647257.14285714,
            "unit": "ns",
            "range": "± 823917.9129335321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123119069.23076923,
            "unit": "ns",
            "range": "± 613350.0242990883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247651571.42857143,
            "unit": "ns",
            "range": "± 2176647.439537225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5434771.986607143,
            "unit": "ns",
            "range": "± 20337.89713321018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790239.1927083333,
            "unit": "ns",
            "range": "± 8366.761533184519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317426.4192708333,
            "unit": "ns",
            "range": "± 10603.697343128955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3145416.819852941,
            "unit": "ns",
            "range": "± 60466.962511474376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013675.0130208334,
            "unit": "ns",
            "range": "± 10601.378113873203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941657.7218191965,
            "unit": "ns",
            "range": "± 5706.048070216442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4034662.5,
            "unit": "ns",
            "range": "± 123860.86041173573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4160609.090909091,
            "unit": "ns",
            "range": "± 130359.08187492241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4905855.555555556,
            "unit": "ns",
            "range": "± 98700.93403349823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4794697.435897436,
            "unit": "ns",
            "range": "± 159849.17148622108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11798570,
            "unit": "ns",
            "range": "± 395004.62197880086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301606.52173913043,
            "unit": "ns",
            "range": "± 11207.624432083188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287256.7164179105,
            "unit": "ns",
            "range": "± 13511.131481234695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255092.40506329114,
            "unit": "ns",
            "range": "± 13240.165892444898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4889821.428571428,
            "unit": "ns",
            "range": "± 64470.857203634485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4561546.666666667,
            "unit": "ns",
            "range": "± 66446.35716841352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23704.347826086956,
            "unit": "ns",
            "range": "± 1639.5465094984067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102620.21276595745,
            "unit": "ns",
            "range": "± 7893.832896869952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83186.45833333333,
            "unit": "ns",
            "range": "± 6098.621410944861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100779.16666666667,
            "unit": "ns",
            "range": "± 12951.577157906018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6650.526315789473,
            "unit": "ns",
            "range": "± 825.6362709811667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23264.583333333332,
            "unit": "ns",
            "range": "± 1731.1376950717251"
          }
        ]
      }
    ]
  }
}