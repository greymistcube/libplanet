window.BENCHMARK_DATA = {
  "lastUpdate": 1689780703636,
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
          "id": "0e9db4a144b2f78afa6a4c708219dc39103a657b",
          "message": "Edited csproj",
          "timestamp": "2023-07-20T00:14:50+09:00",
          "tree_id": "9d01215fa046c2270f1c12d42b56752b93b1a265",
          "url": "https://github.com/greymistcube/libplanet/commit/0e9db4a144b2f78afa6a4c708219dc39103a657b"
        },
        "date": 1689780672205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1411613.7931034483,
            "unit": "ns",
            "range": "± 37951.13139794697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2472902.1739130435,
            "unit": "ns",
            "range": "± 77399.229077787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1913293.9393939395,
            "unit": "ns",
            "range": "± 57466.68023403834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4737717.24137931,
            "unit": "ns",
            "range": "± 204460.57839733383"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44362.96296296296,
            "unit": "ns",
            "range": "± 2349.9172562265067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6799035.714285715,
            "unit": "ns",
            "range": "± 34594.455027956705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18044733.333333332,
            "unit": "ns",
            "range": "± 201448.28711347334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45483566.666666664,
            "unit": "ns",
            "range": "± 357885.9947498578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90394566.66666667,
            "unit": "ns",
            "range": "± 1232586.89213648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182199610,
            "unit": "ns",
            "range": "± 1163261.370826498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4994183.072916667,
            "unit": "ns",
            "range": "± 10916.019590524142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567601.2890625,
            "unit": "ns",
            "range": "± 2520.650105212347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156587.5065104167,
            "unit": "ns",
            "range": "± 1413.3732597884243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609126.0546875,
            "unit": "ns",
            "range": "± 6741.033539872531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808883.4209735577,
            "unit": "ns",
            "range": "± 769.5620635175516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766602.490234375,
            "unit": "ns",
            "range": "± 896.2992654222854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2990966.6666666665,
            "unit": "ns",
            "range": "± 38291.357970671335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3076796.4285714286,
            "unit": "ns",
            "range": "± 49699.5154767563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3970131.8181818184,
            "unit": "ns",
            "range": "± 95669.21376912986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3525152,
            "unit": "ns",
            "range": "± 92017.79320689378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6047032.352941177,
            "unit": "ns",
            "range": "± 193207.248939528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262215.55555555556,
            "unit": "ns",
            "range": "± 9884.398992065397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253746.2962962963,
            "unit": "ns",
            "range": "± 10635.943207377146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217084.52380952382,
            "unit": "ns",
            "range": "± 11634.105389081084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3939243.3333333335,
            "unit": "ns",
            "range": "± 46067.4422786336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3549366.6666666665,
            "unit": "ns",
            "range": "± 36566.117545905145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19807.44680851064,
            "unit": "ns",
            "range": "± 2143.469168844144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90988.14432989691,
            "unit": "ns",
            "range": "± 7818.8000371296475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67446.15384615384,
            "unit": "ns",
            "range": "± 1783.0828963860922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84095.23809523809,
            "unit": "ns",
            "range": "± 6690.9920521117665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4242.268041237114,
            "unit": "ns",
            "range": "± 631.6042820248806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17844.791666666668,
            "unit": "ns",
            "range": "± 2165.6587567936904"
          }
        ]
      }
    ]
  }
}