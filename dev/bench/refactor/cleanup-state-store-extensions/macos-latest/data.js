window.BENCHMARK_DATA = {
  "lastUpdate": 1696570937579,
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
          "id": "a7262433136bc8624a3b123bb7834f73ccd77f45",
          "message": "Remove more",
          "timestamp": "2023-10-06T14:17:58+09:00",
          "tree_id": "57f5b62f0971a37b87bbbfbace9bff439ab8d517",
          "url": "https://github.com/greymistcube/libplanet/commit/a7262433136bc8624a3b123bb7834f73ccd77f45"
        },
        "date": 1696570908724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8483180.076923076,
            "unit": "ns",
            "range": "± 226989.97783341416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20955825,
            "unit": "ns",
            "range": "± 442220.04160971055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53750677,
            "unit": "ns",
            "range": "± 1770539.6143305253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108554200.07142857,
            "unit": "ns",
            "range": "± 1602874.3480763386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208127547.63636363,
            "unit": "ns",
            "range": "± 5096132.261977243"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65380.35632183908,
            "unit": "ns",
            "range": "± 9483.170851293055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323824.5777777778,
            "unit": "ns",
            "range": "± 30161.0876264184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318368.25,
            "unit": "ns",
            "range": "± 31135.883169407785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287321.82558139536,
            "unit": "ns",
            "range": "± 20474.733895673267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4452958.488095238,
            "unit": "ns",
            "range": "± 238645.61270387328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3958519.087301587,
            "unit": "ns",
            "range": "± 179884.34864025874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18788.081395348836,
            "unit": "ns",
            "range": "± 2637.462298431921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88306.97849462366,
            "unit": "ns",
            "range": "± 10770.607831721936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82997.84444444445,
            "unit": "ns",
            "range": "± 11128.313270446402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81416.6043956044,
            "unit": "ns",
            "range": "± 12096.746338379242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4840.635294117647,
            "unit": "ns",
            "range": "± 553.5970222329688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19538.32183908046,
            "unit": "ns",
            "range": "± 4560.007844990837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532925.7840909092,
            "unit": "ns",
            "range": "± 153952.830643432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3131002.11627907,
            "unit": "ns",
            "range": "± 282615.7072194208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2513908.8863636362,
            "unit": "ns",
            "range": "± 290159.93262140884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11795128.885057472,
            "unit": "ns",
            "range": "± 676752.9687803272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388223.294117647,
            "unit": "ns",
            "range": "± 161236.21708287438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3696438.3414634145,
            "unit": "ns",
            "range": "± 195439.50562196606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4591988.779220779,
            "unit": "ns",
            "range": "± 217976.5820806653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4513347.878787879,
            "unit": "ns",
            "range": "± 210975.9857604298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12754829.19402985,
            "unit": "ns",
            "range": "± 604339.9187622665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5368410.3875,
            "unit": "ns",
            "range": "± 76162.50754474012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1755935.6848493305,
            "unit": "ns",
            "range": "± 19995.008380609324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1049477.9725060095,
            "unit": "ns",
            "range": "± 10655.209119434367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597272.9203125,
            "unit": "ns",
            "range": "± 48228.219868485765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854147.1822265625,
            "unit": "ns",
            "range": "± 11529.223511576189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784304.5535606971,
            "unit": "ns",
            "range": "± 5260.101774126633"
          }
        ]
      }
    ]
  }
}