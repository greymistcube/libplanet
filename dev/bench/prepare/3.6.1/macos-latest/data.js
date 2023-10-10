window.BENCHMARK_DATA = {
  "lastUpdate": 1696900478231,
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
          "id": "134c760b2b332ae6eaa43e5022068dac9c89d3ea",
          "message": "Prepare 3.6.1",
          "timestamp": "2023-10-10T09:56:08+09:00",
          "tree_id": "3755ab0ad6784245232eca019359e9709e05e21e",
          "url": "https://github.com/greymistcube/libplanet/commit/134c760b2b332ae6eaa43e5022068dac9c89d3ea"
        },
        "date": 1696900459973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8401320.7,
            "unit": "ns",
            "range": "± 296876.503250538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21015634.568965517,
            "unit": "ns",
            "range": "± 611320.6551032381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50708797.95454545,
            "unit": "ns",
            "range": "± 1211529.9954154675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104432301.15384616,
            "unit": "ns",
            "range": "± 1674298.411553371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215019482.26923078,
            "unit": "ns",
            "range": "± 3388547.894376492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59298.32417582418,
            "unit": "ns",
            "range": "± 9051.4549138595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311773.9893617021,
            "unit": "ns",
            "range": "± 25586.908714925044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317567.9587628866,
            "unit": "ns",
            "range": "± 34547.78066132876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291833.670212766,
            "unit": "ns",
            "range": "± 24140.288255238065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4163854.2162162163,
            "unit": "ns",
            "range": "± 137757.97155823992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3706564.6086956523,
            "unit": "ns",
            "range": "± 142823.85108633773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19266.255102040817,
            "unit": "ns",
            "range": "± 3335.043675230558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85452.72340425532,
            "unit": "ns",
            "range": "± 9221.53325500753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93232.0101010101,
            "unit": "ns",
            "range": "± 17893.53968957361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90301.95698924731,
            "unit": "ns",
            "range": "± 13954.088861500479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4829.404494382023,
            "unit": "ns",
            "range": "± 597.4821929469211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17423.75294117647,
            "unit": "ns",
            "range": "± 1463.1304168824877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560497.0102040817,
            "unit": "ns",
            "range": "± 180589.86217949836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2739215.1428571427,
            "unit": "ns",
            "range": "± 117086.49930596043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2306322.978021978,
            "unit": "ns",
            "range": "± 245954.0797142145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12805073.948453609,
            "unit": "ns",
            "range": "± 3449274.1417174144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3478831.758426966,
            "unit": "ns",
            "range": "± 365767.5829326262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3499824.4534883723,
            "unit": "ns",
            "range": "± 282367.42473771574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4524146.704545454,
            "unit": "ns",
            "range": "± 352808.1850052424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4350508.929292929,
            "unit": "ns",
            "range": "± 392263.15569528774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16782196.29292929,
            "unit": "ns",
            "range": "± 2489804.2157134595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5300033.130208333,
            "unit": "ns",
            "range": "± 45027.571707046016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1683595.384874132,
            "unit": "ns",
            "range": "± 35343.75345470263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 971852.7434895834,
            "unit": "ns",
            "range": "± 10270.9177658174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2411113.786979167,
            "unit": "ns",
            "range": "± 35755.45159858281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 755279.80078125,
            "unit": "ns",
            "range": "± 5792.293954243175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749508.9001953125,
            "unit": "ns",
            "range": "± 6720.035011952392"
          }
        ]
      }
    ]
  }
}