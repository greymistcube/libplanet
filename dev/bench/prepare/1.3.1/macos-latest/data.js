window.BENCHMARK_DATA = {
  "lastUpdate": 1684481797155,
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
          "id": "8962d75b326cf21b3b6ae9490a38351e2f28374f",
          "message": "Prepare 1.3.1",
          "timestamp": "2023-05-19T16:19:25+09:00",
          "tree_id": "c546d985806a3d5acd8e4c9d43c70e1c7aa4249d",
          "url": "https://github.com/greymistcube/libplanet/commit/8962d75b326cf21b3b6ae9490a38351e2f28374f"
        },
        "date": 1684481783113,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7515304.071428572,
            "unit": "ns",
            "range": "± 65715.35932333098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20807733.623376623,
            "unit": "ns",
            "range": "± 1065037.759440457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48154181.93209877,
            "unit": "ns",
            "range": "± 2525187.9700459917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97277974.625,
            "unit": "ns",
            "range": "± 1853390.5681591553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214450039.0952381,
            "unit": "ns",
            "range": "± 7599864.076808671"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66362.09375,
            "unit": "ns",
            "range": "± 10652.97312893707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329231.64285714284,
            "unit": "ns",
            "range": "± 24633.175779636615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315338.7842105263,
            "unit": "ns",
            "range": "± 34961.10972563875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308159.2173913043,
            "unit": "ns",
            "range": "± 24737.00270397361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4209095.978723404,
            "unit": "ns",
            "range": "± 150252.70510933723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3814974.909090909,
            "unit": "ns",
            "range": "± 90601.17293399214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20404.055555555555,
            "unit": "ns",
            "range": "± 3663.322361135859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97770.66326530612,
            "unit": "ns",
            "range": "± 15247.207370933373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107541.92268041238,
            "unit": "ns",
            "range": "± 14686.209466590199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109392.86842105263,
            "unit": "ns",
            "range": "± 15851.293142800438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6076.693548387097,
            "unit": "ns",
            "range": "± 1187.5964149240824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18556.91304347826,
            "unit": "ns",
            "range": "± 2944.0993777727044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1448851.306122449,
            "unit": "ns",
            "range": "± 127791.07551776765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2756221.962264151,
            "unit": "ns",
            "range": "± 113946.05490368647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2418926.9791666665,
            "unit": "ns",
            "range": "± 217314.09941789345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6563758.706521739,
            "unit": "ns",
            "range": "± 440409.9978090479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3573365.08,
            "unit": "ns",
            "range": "± 141747.7462463585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3451875.442105263,
            "unit": "ns",
            "range": "± 249655.00904208288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4555061.818181818,
            "unit": "ns",
            "range": "± 195902.56817493658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4464776.521739131,
            "unit": "ns",
            "range": "± 462319.6295652632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7916141.261363637,
            "unit": "ns",
            "range": "± 433872.2523322394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7260213.007233797,
            "unit": "ns",
            "range": "± 199801.59780215262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2034925.4879557292,
            "unit": "ns",
            "range": "± 16917.420142394854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331329.4212239583,
            "unit": "ns",
            "range": "± 23597.25081932921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567333.53640625,
            "unit": "ns",
            "range": "± 54447.514675422826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895247.0462890625,
            "unit": "ns",
            "range": "± 20169.61306543712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736650.296875,
            "unit": "ns",
            "range": "± 12822.271582718671"
          }
        ]
      }
    ]
  }
}