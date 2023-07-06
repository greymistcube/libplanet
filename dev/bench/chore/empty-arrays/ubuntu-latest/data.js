window.BENCHMARK_DATA = {
  "lastUpdate": 1688628672680,
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
          "id": "e24d18921c41a38b868ee475266278ff81d69ecb",
          "message": "[skip changelog] Use Array.Empty",
          "timestamp": "2023-07-06T16:10:56+09:00",
          "tree_id": "325d5ec55c6a1ae00ba89f4065e854776ab1151d",
          "url": "https://github.com/greymistcube/libplanet/commit/e24d18921c41a38b868ee475266278ff81d69ecb"
        },
        "date": 1688628663935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369666.29347826086,
            "unit": "ns",
            "range": "± 42116.41884334005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 375391.75257731957,
            "unit": "ns",
            "range": "± 59324.19843906991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318324.91752577317,
            "unit": "ns",
            "range": "± 44401.74702706672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5486154.87755102,
            "unit": "ns",
            "range": "± 449067.60817921313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5816215.2,
            "unit": "ns",
            "range": "± 372628.8223183403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24433.0206185567,
            "unit": "ns",
            "range": "± 8809.280994803366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114141.10638297872,
            "unit": "ns",
            "range": "± 21481.019489566635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125249.32653061225,
            "unit": "ns",
            "range": "± 32818.141637384855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149348.31914893616,
            "unit": "ns",
            "range": "± 29432.758718637328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6669.329545454545,
            "unit": "ns",
            "range": "± 1587.0496788868843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27326.622448979593,
            "unit": "ns",
            "range": "± 10060.076013235099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1962309.202020202,
            "unit": "ns",
            "range": "± 244053.08053848884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3739089.1145833335,
            "unit": "ns",
            "range": "± 327123.25223685696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2533879.5463917525,
            "unit": "ns",
            "range": "± 274283.30274979153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7088524.084210526,
            "unit": "ns",
            "range": "± 491353.3958548347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7339980.675,
            "unit": "ns",
            "range": "± 167033.755733991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2364783.2174136513,
            "unit": "ns",
            "range": "± 81121.00068815595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1741026.641015625,
            "unit": "ns",
            "range": "± 39912.89517386228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3265040.06015625,
            "unit": "ns",
            "range": "± 47176.3611004353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1105156.4256963315,
            "unit": "ns",
            "range": "± 41827.98729738016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 991198.8553385417,
            "unit": "ns",
            "range": "± 18370.640563464953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4207442.677419355,
            "unit": "ns",
            "range": "± 314658.68558505137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4336920.260416667,
            "unit": "ns",
            "range": "± 340805.76646194013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5741971.104166667,
            "unit": "ns",
            "range": "± 369758.3504762473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5073668.869565218,
            "unit": "ns",
            "range": "± 284450.7545856689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9002144.275510205,
            "unit": "ns",
            "range": "± 662794.0519295346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10114496.408163264,
            "unit": "ns",
            "range": "± 848910.7510246368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26811255.1,
            "unit": "ns",
            "range": "± 1292382.8247766772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69240372.6969697,
            "unit": "ns",
            "range": "± 3261671.094703455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140961857.5,
            "unit": "ns",
            "range": "± 6257557.408130993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286952303.92156863,
            "unit": "ns",
            "range": "± 11608243.480596524"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70773.5744680851,
            "unit": "ns",
            "range": "± 16411.74316551883"
          }
        ]
      }
    ]
  }
}