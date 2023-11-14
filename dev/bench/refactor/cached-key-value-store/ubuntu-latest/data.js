window.BENCHMARK_DATA = {
  "lastUpdate": 1699946148942,
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
          "id": "0f9075efda158932155ab958a4efe01d5336e91b",
          "message": "Added logging",
          "timestamp": "2023-11-14T15:40:51+09:00",
          "tree_id": "6c7453fc44533f705b7c7c8d0ddfdef09a0f7838",
          "url": "https://github.com/greymistcube/libplanet/commit/0f9075efda158932155ab958a4efe01d5336e91b"
        },
        "date": 1699946142784,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5622367.714285715,
            "unit": "ns",
            "range": "± 28415.674494704697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14646350.066666666,
            "unit": "ns",
            "range": "± 268725.1062390887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37356981.7,
            "unit": "ns",
            "range": "± 344302.52857235057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88175520.61538461,
            "unit": "ns",
            "range": "± 1099520.429297893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150460147.07142857,
            "unit": "ns",
            "range": "± 792512.2046626804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991707.081632653,
            "unit": "ns",
            "range": "± 92324.41070393202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1921625.4642857143,
            "unit": "ns",
            "range": "± 102723.29736436787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1518732.398989899,
            "unit": "ns",
            "range": "± 140966.69827038937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6697054.533333333,
            "unit": "ns",
            "range": "± 337803.0218826292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2365942.1,
            "unit": "ns",
            "range": "± 83554.3593672126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2603253.882352941,
            "unit": "ns",
            "range": "± 51660.87265750836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3267213.411764706,
            "unit": "ns",
            "range": "± 59483.20731418535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3021946.1153846155,
            "unit": "ns",
            "range": "± 103495.50578969101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7405817.285714285,
            "unit": "ns",
            "range": "± 122219.23190312157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41503.604166666664,
            "unit": "ns",
            "range": "± 5304.3557304682045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3670236.7529296875,
            "unit": "ns",
            "range": "± 13029.820854984102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1164647.2455357143,
            "unit": "ns",
            "range": "± 19485.80554498063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733318.3811383928,
            "unit": "ns",
            "range": "± 7348.562825575363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925625.98046875,
            "unit": "ns",
            "range": "± 3538.937336775518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635449.5294471154,
            "unit": "ns",
            "range": "± 2345.0968197522757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569645.0584435096,
            "unit": "ns",
            "range": "± 4533.7150875085645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200766.66216216216,
            "unit": "ns",
            "range": "± 10055.855757780559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201455.3896103896,
            "unit": "ns",
            "range": "± 10316.919187936723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173005.25,
            "unit": "ns",
            "range": "± 1954.2283352678203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3006161.8571428573,
            "unit": "ns",
            "range": "± 45505.58310438764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2850680.6666666665,
            "unit": "ns",
            "range": "± 36980.44459414938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15464.945652173914,
            "unit": "ns",
            "range": "± 2209.488187784427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69697.0744680851,
            "unit": "ns",
            "range": "± 6178.469186539538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52978.69512195122,
            "unit": "ns",
            "range": "± 3904.1892645348594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56314.72826086957,
            "unit": "ns",
            "range": "± 8034.4101845287005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3863.917525773196,
            "unit": "ns",
            "range": "± 1562.5374106861618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16019.71052631579,
            "unit": "ns",
            "range": "± 1977.127977727681"
          }
        ]
      }
    ]
  }
}