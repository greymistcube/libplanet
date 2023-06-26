window.BENCHMARK_DATA = {
  "lastUpdate": 1687756540717,
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
          "id": "9463d85e43c39306971b4f49db1d9287e70e293b",
          "message": "Removed unused Signer private property",
          "timestamp": "2023-06-26T11:36:57+09:00",
          "tree_id": "da7b9469c295569b1549280bbc10673b1fa97f46",
          "url": "https://github.com/greymistcube/libplanet/commit/9463d85e43c39306971b4f49db1d9287e70e293b"
        },
        "date": 1687756520353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1497623.469387755,
            "unit": "ns",
            "range": "± 130848.7604194368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2624375.342465753,
            "unit": "ns",
            "range": "± 130667.04908619837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2373863.2653061226,
            "unit": "ns",
            "range": "± 187294.79238678058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5485817.647058823,
            "unit": "ns",
            "range": "± 254185.58559198288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52194.73684210526,
            "unit": "ns",
            "range": "± 6845.706348415378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8017128.571428572,
            "unit": "ns",
            "range": "± 66601.64503132878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20677126.315789472,
            "unit": "ns",
            "range": "± 448339.08774758776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48969070,
            "unit": "ns",
            "range": "± 1127146.1032182118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105522788.8888889,
            "unit": "ns",
            "range": "± 2216589.5438153706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206249746.66666666,
            "unit": "ns",
            "range": "± 2266889.3601669436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4881067.367788462,
            "unit": "ns",
            "range": "± 35876.241297715125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518834.1238839286,
            "unit": "ns",
            "range": "± 18756.959406878617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178922.890625,
            "unit": "ns",
            "range": "± 9274.876795535429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678068.329326923,
            "unit": "ns",
            "range": "± 11197.748260370887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820114.3619791666,
            "unit": "ns",
            "range": "± 5929.892042531762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759116.5169270834,
            "unit": "ns",
            "range": "± 4430.1063632692585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371906,
            "unit": "ns",
            "range": "± 133513.0207056944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3413176,
            "unit": "ns",
            "range": "± 128874.3583051781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4272431.666666667,
            "unit": "ns",
            "range": "± 189152.7465372863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4531657.142857143,
            "unit": "ns",
            "range": "± 72658.55568538171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6985653.333333333,
            "unit": "ns",
            "range": "± 262415.1409157219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274249.4117647059,
            "unit": "ns",
            "range": "± 14831.655524662137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271090.625,
            "unit": "ns",
            "range": "± 17932.423314238727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268161.1111111111,
            "unit": "ns",
            "range": "± 25862.319485324544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3979018.5185185187,
            "unit": "ns",
            "range": "± 165286.07113417436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783246.6666666665,
            "unit": "ns",
            "range": "± 24153.43414407941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27033.333333333332,
            "unit": "ns",
            "range": "± 3525.5359179523234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116802,
            "unit": "ns",
            "range": "± 10946.167448846278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84351,
            "unit": "ns",
            "range": "± 15029.00559221764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114621.73913043478,
            "unit": "ns",
            "range": "± 18114.445853807945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6526.041666666667,
            "unit": "ns",
            "range": "± 1367.151844773164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20417.525773195877,
            "unit": "ns",
            "range": "± 4704.65218138029"
          }
        ]
      }
    ]
  }
}