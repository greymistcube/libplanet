window.BENCHMARK_DATA = {
  "lastUpdate": 1691378977955,
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
        "date": 1691378961085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9518774.715789475,
            "unit": "ns",
            "range": "± 677735.5262273736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22370687.06,
            "unit": "ns",
            "range": "± 1603751.227809772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58947328.39473684,
            "unit": "ns",
            "range": "± 2017908.83997817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121647521.2113402,
            "unit": "ns",
            "range": "± 7020742.212563951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244926006.96470588,
            "unit": "ns",
            "range": "± 21943606.315768242"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78655.7808988764,
            "unit": "ns",
            "range": "± 11884.220715826172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 407897.7626262626,
            "unit": "ns",
            "range": "± 75265.92715323746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389028.21875,
            "unit": "ns",
            "range": "± 71386.36092725175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 400988.28350515466,
            "unit": "ns",
            "range": "± 69292.49654908334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4832792.414141414,
            "unit": "ns",
            "range": "± 537776.0160999246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4335566.170212766,
            "unit": "ns",
            "range": "± 333284.1878418892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22714.870967741936,
            "unit": "ns",
            "range": "± 4637.941555741518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112360.66666666667,
            "unit": "ns",
            "range": "± 24581.623481665767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127843.72340425532,
            "unit": "ns",
            "range": "± 20786.291175854425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136506.20833333334,
            "unit": "ns",
            "range": "± 25176.355581719785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8155.7032967032965,
            "unit": "ns",
            "range": "± 1049.2709161286498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29002.56179775281,
            "unit": "ns",
            "range": "± 6667.095943299479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1695806.1134020619,
            "unit": "ns",
            "range": "± 201601.99442615043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3102590.630952381,
            "unit": "ns",
            "range": "± 163052.56332007697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2221128.3736842107,
            "unit": "ns",
            "range": "± 201201.6046421589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6098255.723404256,
            "unit": "ns",
            "range": "± 433277.60031314986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3703363.711340206,
            "unit": "ns",
            "range": "± 337683.3278207915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3983118.907216495,
            "unit": "ns",
            "range": "± 499251.7754569515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5549457.207070707,
            "unit": "ns",
            "range": "± 637861.2481673401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4738733.37113402,
            "unit": "ns",
            "range": "± 681662.1436417892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8124236.691919192,
            "unit": "ns",
            "range": "± 789448.9582789167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7919380.361111111,
            "unit": "ns",
            "range": "± 522906.64691493334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2305166.0236328123,
            "unit": "ns",
            "range": "± 50291.29331870517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1502242.4330873843,
            "unit": "ns",
            "range": "± 38483.92809322009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3899469.4112103176,
            "unit": "ns",
            "range": "± 178397.22035971808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996171.3961509146,
            "unit": "ns",
            "range": "± 35398.40992535268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799987.3569335938,
            "unit": "ns",
            "range": "± 24683.11939548594"
          }
        ]
      }
    ]
  }
}