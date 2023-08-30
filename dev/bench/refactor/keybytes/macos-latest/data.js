window.BENCHMARK_DATA = {
  "lastUpdate": 1693401861643,
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
          "id": "39627a9e924bc1f1b1014d7348b5ca8a94fe8d78",
          "message": "Remove unnecessary interfaces from KeyBytes",
          "timestamp": "2023-08-30T22:09:21+09:00",
          "tree_id": "8e5ea6425b49c1e8d6b3377dfff3c93746040037",
          "url": "https://github.com/greymistcube/libplanet/commit/39627a9e924bc1f1b1014d7348b5ca8a94fe8d78"
        },
        "date": 1693401844470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8119389.285714285,
            "unit": "ns",
            "range": "± 106173.69784257274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19796843.92857143,
            "unit": "ns",
            "range": "± 233035.98705208744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49979637.85294118,
            "unit": "ns",
            "range": "± 817015.8233056094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97130413.1904762,
            "unit": "ns",
            "range": "± 2281060.381439028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192930535.66666666,
            "unit": "ns",
            "range": "± 1834237.4107923056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67874.07368421053,
            "unit": "ns",
            "range": "± 11933.032502565258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297019.2894736842,
            "unit": "ns",
            "range": "± 13613.647847965696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288825.7849462366,
            "unit": "ns",
            "range": "± 20275.10559445481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269955.8846153846,
            "unit": "ns",
            "range": "± 15815.627849812374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3891550.466666667,
            "unit": "ns",
            "range": "± 69396.18751041697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614219.1333333333,
            "unit": "ns",
            "range": "± 59556.620863638986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16719.26966292135,
            "unit": "ns",
            "range": "± 2021.4461562997922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76614.35567010309,
            "unit": "ns",
            "range": "± 7124.809990141391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68958.86458333333,
            "unit": "ns",
            "range": "± 5264.628113261466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83408.03125,
            "unit": "ns",
            "range": "± 11464.696373010886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4326.909090909091,
            "unit": "ns",
            "range": "± 432.0135065035154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16409.626373626375,
            "unit": "ns",
            "range": "± 2038.1460020123495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523055.2783505155,
            "unit": "ns",
            "range": "± 160497.98869214466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2837014.362318841,
            "unit": "ns",
            "range": "± 137022.72604850575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1960080.1494845361,
            "unit": "ns",
            "range": "± 199583.97839287063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5633187.6,
            "unit": "ns",
            "range": "± 213846.13468347664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3119051.5135135134,
            "unit": "ns",
            "range": "± 105020.49750713262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3370754.1276595746,
            "unit": "ns",
            "range": "± 130566.78839892415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4208853.274193549,
            "unit": "ns",
            "range": "± 189674.3894391657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3632238.585106383,
            "unit": "ns",
            "range": "± 140709.9490754605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6808403.863636363,
            "unit": "ns",
            "range": "± 227375.4861995227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5464364.5859375,
            "unit": "ns",
            "range": "± 64680.1859827435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1695394.3568638393,
            "unit": "ns",
            "range": "± 8084.222265463453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 981215.720703125,
            "unit": "ns",
            "range": "± 4690.45227588666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2444346.28125,
            "unit": "ns",
            "range": "± 20556.788599516745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782819.5533203125,
            "unit": "ns",
            "range": "± 2517.1964513101952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719376.6307291667,
            "unit": "ns",
            "range": "± 5095.643323333774"
          }
        ]
      }
    ]
  }
}