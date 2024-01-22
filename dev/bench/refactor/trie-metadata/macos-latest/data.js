window.BENCHMARK_DATA = {
  "lastUpdate": 1705899644549,
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
          "id": "b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d",
          "message": "Move TrieMetadata to Libplanet.Store",
          "timestamp": "2024-01-22T13:33:41+09:00",
          "tree_id": "f25875bc53002857b9c25706e851573729068f20",
          "url": "https://github.com/greymistcube/libplanet/commit/b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d"
        },
        "date": 1705899611810,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9630819.625,
            "unit": "ns",
            "range": "± 182170.3191217402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23550825.89473684,
            "unit": "ns",
            "range": "± 1742006.4843092635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72873058.39690721,
            "unit": "ns",
            "range": "± 7206931.848158854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123710929.5909091,
            "unit": "ns",
            "range": "± 2993700.6374458843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256171505.01086956,
            "unit": "ns",
            "range": "± 27874806.136390284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81930.84536082474,
            "unit": "ns",
            "range": "± 27691.88945429247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256312.62886597938,
            "unit": "ns",
            "range": "± 36875.895815762786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257958.35416666666,
            "unit": "ns",
            "range": "± 32211.727777964155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242698.3777777778,
            "unit": "ns",
            "range": "± 21432.73053568375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4803517.375,
            "unit": "ns",
            "range": "± 301927.37030791555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4091874.0555555555,
            "unit": "ns",
            "range": "± 84760.77453649267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16603.892473118278,
            "unit": "ns",
            "range": "± 3066.3858504703003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81595.35555555555,
            "unit": "ns",
            "range": "± 11143.272416460108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87843.52747252748,
            "unit": "ns",
            "range": "± 7183.839048464051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90464.71428571429,
            "unit": "ns",
            "range": "± 18570.36235527862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6157.459183673469,
            "unit": "ns",
            "range": "± 1139.2832248208038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16188.97,
            "unit": "ns",
            "range": "± 3697.191282978106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671495.0752688171,
            "unit": "ns",
            "range": "± 350282.1189305606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3926120.39,
            "unit": "ns",
            "range": "± 931211.6012831137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3339342.4587628865,
            "unit": "ns",
            "range": "± 917693.8906746301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33706951.08163265,
            "unit": "ns",
            "range": "± 7830318.140984618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3877942.4784946237,
            "unit": "ns",
            "range": "± 475479.28480003844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583766.1764705884,
            "unit": "ns",
            "range": "± 71078.327416164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5368209.06701031,
            "unit": "ns",
            "range": "± 1122004.794563006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4514418.1,
            "unit": "ns",
            "range": "± 307922.55250500125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27332280.541666668,
            "unit": "ns",
            "range": "± 4443409.482053918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5477047.535488697,
            "unit": "ns",
            "range": "± 545864.52513857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2086293.2128295898,
            "unit": "ns",
            "range": "± 278063.335110252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146088.2176737883,
            "unit": "ns",
            "range": "± 166783.1219128637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633335.8336332515,
            "unit": "ns",
            "range": "± 279765.16716915165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802705.4029913652,
            "unit": "ns",
            "range": "± 83963.8479149706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 658535.274605129,
            "unit": "ns",
            "range": "± 40334.167609951444"
          }
        ]
      }
    ]
  }
}