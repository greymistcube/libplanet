window.BENCHMARK_DATA = {
  "lastUpdate": 1691723568688,
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
          "id": "a36f825e0727644c8d0045bf2a8f721e639ef1e6",
          "message": "Prepare 3.3.0",
          "timestamp": "2023-08-11T11:55:43+09:00",
          "tree_id": "56dcba49cb260e6b5820b1b6ad2215d6b5540712",
          "url": "https://github.com/greymistcube/libplanet/commit/a36f825e0727644c8d0045bf2a8f721e639ef1e6"
        },
        "date": 1691723560044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4201179.966666667,
            "unit": "ns",
            "range": "± 117407.44137448145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4392405.571428572,
            "unit": "ns",
            "range": "± 70092.2981873673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5144715.903225807,
            "unit": "ns",
            "range": "± 154805.62995820594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4855394.791666667,
            "unit": "ns",
            "range": "± 105434.82409319705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7408159.916666667,
            "unit": "ns",
            "range": "± 219962.98167755082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9861637.266666668,
            "unit": "ns",
            "range": "± 183258.65664662013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26147141.785714287,
            "unit": "ns",
            "range": "± 200727.57219719797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67598030,
            "unit": "ns",
            "range": "± 642267.8028954455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135053108.13333333,
            "unit": "ns",
            "range": "± 737977.2383013165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269451708.64285713,
            "unit": "ns",
            "range": "± 1877016.9367907485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56340.85106382979,
            "unit": "ns",
            "range": "± 3606.118185067743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6488785.012276785,
            "unit": "ns",
            "range": "± 29594.75959670335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867021.0573381695,
            "unit": "ns",
            "range": "± 4236.262029085865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295271.1153645834,
            "unit": "ns",
            "range": "± 5110.086909797604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3061004.0450721155,
            "unit": "ns",
            "range": "± 5705.361920207413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967412.0339355469,
            "unit": "ns",
            "range": "± 1627.9086312279176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888807.2209903493,
            "unit": "ns",
            "range": "± 17510.738353007244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316944.37209302327,
            "unit": "ns",
            "range": "± 11110.375596975528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309893.2195121951,
            "unit": "ns",
            "range": "± 9919.806806365219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267324.25581395347,
            "unit": "ns",
            "range": "± 9871.509562982184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5187769.2,
            "unit": "ns",
            "range": "± 74027.28689978349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4766106.461538462,
            "unit": "ns",
            "range": "± 129384.04786749587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22857.344444444443,
            "unit": "ns",
            "range": "± 1773.8397072428108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97839.6914893617,
            "unit": "ns",
            "range": "± 5517.5093999980245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83055.2,
            "unit": "ns",
            "range": "± 2404.133080881388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91871.46391752578,
            "unit": "ns",
            "range": "± 14024.089637760995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5864.552083333333,
            "unit": "ns",
            "range": "± 436.26759942884104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20596.782608695652,
            "unit": "ns",
            "range": "± 1244.4105169273016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671635.2647058824,
            "unit": "ns",
            "range": "± 79608.64844876675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3134788.380952381,
            "unit": "ns",
            "range": "± 142260.55810802718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2103842.948979592,
            "unit": "ns",
            "range": "± 146844.53990694345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5737375.161290322,
            "unit": "ns",
            "range": "± 324556.16577456804"
          }
        ]
      }
    ]
  }
}