window.BENCHMARK_DATA = {
  "lastUpdate": 1704203678496,
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
          "id": "f12184e29d683f480dd46778870e43c10233e50a",
          "message": "Roll back exposed GraphQL API changes by adding LegacyBencodexValueType",
          "timestamp": "2024-01-02T22:40:20+09:00",
          "tree_id": "f983da298ebf7f6783db8aa8342ab7ceefac443f",
          "url": "https://github.com/greymistcube/libplanet/commit/f12184e29d683f480dd46778870e43c10233e50a"
        },
        "date": 1704203661225,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7765700.125,
            "unit": "ns",
            "range": "± 200801.23370318924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18754472.214285713,
            "unit": "ns",
            "range": "± 169043.6456154166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46448323,
            "unit": "ns",
            "range": "± 647630.0245312193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93376786.21428572,
            "unit": "ns",
            "range": "± 1392251.2614694994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197934583,
            "unit": "ns",
            "range": "± 3157871.254659306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36142.252873563215,
            "unit": "ns",
            "range": "± 4650.219967836458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235465.98936170212,
            "unit": "ns",
            "range": "± 14166.599108879785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219551.6265822785,
            "unit": "ns",
            "range": "± 11421.057670684657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221594.26041666666,
            "unit": "ns",
            "range": "± 14863.773444356368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3838531.1875,
            "unit": "ns",
            "range": "± 72163.74942745954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3511053.923076923,
            "unit": "ns",
            "range": "± 29530.22016077073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17074.060606060608,
            "unit": "ns",
            "range": "± 3240.4043455747983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75130.42857142857,
            "unit": "ns",
            "range": "± 10774.758850603563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78500.61224489796,
            "unit": "ns",
            "range": "± 11368.56696251052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79145.87931034483,
            "unit": "ns",
            "range": "± 11027.057468981384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5267.535353535353,
            "unit": "ns",
            "range": "± 1850.4029969950857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20318.895833333332,
            "unit": "ns",
            "range": "± 2594.2295782803344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058110.3541666667,
            "unit": "ns",
            "range": "± 82548.90505697108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2267258.1363636362,
            "unit": "ns",
            "range": "± 123843.65353009553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1516298.5747126436,
            "unit": "ns",
            "range": "± 82377.21124344559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6802085.704301075,
            "unit": "ns",
            "range": "± 414759.8032299134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3014101.918918919,
            "unit": "ns",
            "range": "± 98130.78018824855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2984738.21875,
            "unit": "ns",
            "range": "± 118474.05366945128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3604448.15,
            "unit": "ns",
            "range": "± 82164.7921572219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3457694.8205128205,
            "unit": "ns",
            "range": "± 119518.13206082598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13243572.171717172,
            "unit": "ns",
            "range": "± 2057666.6690467333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4707617.959134615,
            "unit": "ns",
            "range": "± 68945.82338912573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1416727.279296875,
            "unit": "ns",
            "range": "± 19849.057879471933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 905152.7047526041,
            "unit": "ns",
            "range": "± 19676.454611256908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2195416.2202034886,
            "unit": "ns",
            "range": "± 119072.6836178642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 665767.828441723,
            "unit": "ns",
            "range": "± 22505.18100623844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571582.8564453125,
            "unit": "ns",
            "range": "± 7042.927414062586"
          }
        ]
      }
    ]
  }
}