window.BENCHMARK_DATA = {
  "lastUpdate": 1694089199312,
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
          "id": "2ee051d04d50883dc27141ddbc1225fb504963ce",
          "message": "Prepare 3.4.0",
          "timestamp": "2023-09-07T21:00:32+09:00",
          "tree_id": "d08370af5794578e62bc1c40dd2c906d7efde68b",
          "url": "https://github.com/greymistcube/libplanet/commit/2ee051d04d50883dc27141ddbc1225fb504963ce"
        },
        "date": 1694089191012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1485295.1237113401,
            "unit": "ns",
            "range": "± 151957.1258057034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2850011.02,
            "unit": "ns",
            "range": "± 254844.50161851934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797833.9393939395,
            "unit": "ns",
            "range": "± 215806.5628105845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5020860.01,
            "unit": "ns",
            "range": "± 543958.4046187757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290382.63,
            "unit": "ns",
            "range": "± 33734.2107050398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282475.14,
            "unit": "ns",
            "range": "± 33036.518034729226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248169.36,
            "unit": "ns",
            "range": "± 29819.947443036406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4551734.737373738,
            "unit": "ns",
            "range": "± 414362.33424680494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4229123.93,
            "unit": "ns",
            "range": "± 318711.9343211236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19627.247311827956,
            "unit": "ns",
            "range": "± 1989.6749497250419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88782.9696969697,
            "unit": "ns",
            "range": "± 12386.401297023647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77713.6914893617,
            "unit": "ns",
            "range": "± 8780.232612622216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79146.9247311828,
            "unit": "ns",
            "range": "± 10624.763997620963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5265.697916666667,
            "unit": "ns",
            "range": "± 563.6091426510261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18293.68131868132,
            "unit": "ns",
            "range": "± 2177.6449862644477"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50976.02197802198,
            "unit": "ns",
            "range": "± 4999.595148005092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8192052.26,
            "unit": "ns",
            "range": "± 570491.397618686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22676102.692307692,
            "unit": "ns",
            "range": "± 1268427.2555087763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55882790.63,
            "unit": "ns",
            "range": "± 3782636.490151856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114006202.43333334,
            "unit": "ns",
            "range": "± 6299717.007755698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229333071.72857141,
            "unit": "ns",
            "range": "± 11096311.775091063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3659132.79,
            "unit": "ns",
            "range": "± 300502.546833971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3853047.793814433,
            "unit": "ns",
            "range": "± 286741.5817597113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4711133.6,
            "unit": "ns",
            "range": "± 368631.9394091696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4065809.87,
            "unit": "ns",
            "range": "± 388339.74647230626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6776732.08,
            "unit": "ns",
            "range": "± 522159.4461637885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5239281.637946429,
            "unit": "ns",
            "range": "± 168901.2506949232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1678665.3813004033,
            "unit": "ns",
            "range": "± 49979.36133164256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121229.3108326981,
            "unit": "ns",
            "range": "± 40141.85610486393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2764898.119140625,
            "unit": "ns",
            "range": "± 120989.56830929234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876791.3702947443,
            "unit": "ns",
            "range": "± 32714.154782756636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793046.5887156519,
            "unit": "ns",
            "range": "± 34694.78262837854"
          }
        ]
      }
    ]
  }
}