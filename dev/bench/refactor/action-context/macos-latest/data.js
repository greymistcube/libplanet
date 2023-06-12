window.BENCHMARK_DATA = {
  "lastUpdate": 1686576738905,
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
          "id": "d34f81fcdc5110778e15209b674451cf0f8e1951",
          "message": "Derive ActionContext.BlockAction instead of assigning",
          "timestamp": "2023-06-12T22:04:14+09:00",
          "tree_id": "86d1e01d5b015b0e21d3b4082135395949884e73",
          "url": "https://github.com/greymistcube/libplanet/commit/d34f81fcdc5110778e15209b674451cf0f8e1951"
        },
        "date": 1686576725383,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12155494.835051546,
            "unit": "ns",
            "range": "± 3543400.845449031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26504218.941860463,
            "unit": "ns",
            "range": "± 5059261.40279058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75384209.66483517,
            "unit": "ns",
            "range": "± 22334211.46521698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 180198769.03125,
            "unit": "ns",
            "range": "± 67249582.72007626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267138443.28651685,
            "unit": "ns",
            "range": "± 44005808.201099455"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84104.47619047618,
            "unit": "ns",
            "range": "± 6639.144814424231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373666.4569892473,
            "unit": "ns",
            "range": "± 40656.7138251894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368165.95454545453,
            "unit": "ns",
            "range": "± 47160.75964137911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 378919.3977272727,
            "unit": "ns",
            "range": "± 55399.03119822642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4943994.675824176,
            "unit": "ns",
            "range": "± 656158.634927012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4524155.17816092,
            "unit": "ns",
            "range": "± 564636.9578931658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33158.125,
            "unit": "ns",
            "range": "± 6549.043405294035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 137217.52808988764,
            "unit": "ns",
            "range": "± 20304.514430903542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 143555.88202247192,
            "unit": "ns",
            "range": "± 18287.33753765257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 160444.13043478262,
            "unit": "ns",
            "range": "± 32131.569651489393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11308.579545454546,
            "unit": "ns",
            "range": "± 1655.8605862077015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32502.683908045976,
            "unit": "ns",
            "range": "± 5252.069072963521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1953612.9787234042,
            "unit": "ns",
            "range": "± 281817.17572732194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3969503.1666666665,
            "unit": "ns",
            "range": "± 915041.4861976892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3202035.2747252746,
            "unit": "ns",
            "range": "± 647458.9415344688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9392725.697916666,
            "unit": "ns",
            "range": "± 2406390.796696854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4114193.8218390807,
            "unit": "ns",
            "range": "± 995879.0143270942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4326956.977777778,
            "unit": "ns",
            "range": "± 838559.7999151092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5013045.609195402,
            "unit": "ns",
            "range": "± 552114.8041232922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4734279.6,
            "unit": "ns",
            "range": "± 532626.9788321708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8771314.594117647,
            "unit": "ns",
            "range": "± 948928.4692386012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8637008.26304945,
            "unit": "ns",
            "range": "± 1393202.6746213185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2339328.1064670137,
            "unit": "ns",
            "range": "± 207174.5862183551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1468458.2789884869,
            "unit": "ns",
            "range": "± 101664.08679905332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3165459.7513020835,
            "unit": "ns",
            "range": "± 372624.1729052396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886504.5392617985,
            "unit": "ns",
            "range": "± 63438.605830485096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 827045.3162841797,
            "unit": "ns",
            "range": "± 15906.315369412006"
          }
        ]
      }
    ]
  }
}