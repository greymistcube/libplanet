window.BENCHMARK_DATA = {
  "lastUpdate": 1700901932507,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "0fcd4d7b6b8719507c713585f521d4de60ba5f70",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-25T17:34:56+09:00",
          "tree_id": "cff9a84c80c43d1a30d8377791ae1ddd00e5e020",
          "url": "https://github.com/greymistcube/libplanet/commit/0fcd4d7b6b8719507c713585f521d4de60ba5f70"
        },
        "date": 1700901917304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981480.412371134,
            "unit": "ns",
            "range": "± 78913.80403006084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1727090.5405405406,
            "unit": "ns",
            "range": "± 86102.58483211932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393549,
            "unit": "ns",
            "range": "± 144179.6014481153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5376576,
            "unit": "ns",
            "range": "± 215309.82688930398"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33825.42372881356,
            "unit": "ns",
            "range": "± 1499.1484042775505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5092792.857142857,
            "unit": "ns",
            "range": "± 34179.08636951762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13363458.333333334,
            "unit": "ns",
            "range": "± 81593.71030052537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32006200,
            "unit": "ns",
            "range": "± 255565.98124404345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65483500,
            "unit": "ns",
            "range": "± 407137.1116617935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129696620,
            "unit": "ns",
            "range": "± 1137858.5426769257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314977.96875,
            "unit": "ns",
            "range": "± 4526.621714579527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1001021.1197916666,
            "unit": "ns",
            "range": "± 1429.8214811210394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 699055.3841145834,
            "unit": "ns",
            "range": "± 1220.1522891491725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908273.73046875,
            "unit": "ns",
            "range": "± 2786.962296363766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611130.8733258928,
            "unit": "ns",
            "range": "± 814.1673937398804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553682.32421875,
            "unit": "ns",
            "range": "± 1594.239585556879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2130520.7792207794,
            "unit": "ns",
            "range": "± 108417.89439802185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2210567.6470588236,
            "unit": "ns",
            "range": "± 32653.383699444887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2780758.695652174,
            "unit": "ns",
            "range": "± 66454.95338979275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2768388.2352941176,
            "unit": "ns",
            "range": "± 88585.52027759419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6323051.612903226,
            "unit": "ns",
            "range": "± 150317.87401141567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177484.2105263158,
            "unit": "ns",
            "range": "± 13241.619716679852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159475.34246575343,
            "unit": "ns",
            "range": "± 7913.943054682346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142065.9090909091,
            "unit": "ns",
            "range": "± 5261.883259195685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2726666.6666666665,
            "unit": "ns",
            "range": "± 35646.271427270854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2430576.923076923,
            "unit": "ns",
            "range": "± 26715.449769941297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9647.777777777777,
            "unit": "ns",
            "range": "± 1341.7436063267087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49710.9756097561,
            "unit": "ns",
            "range": "± 2599.33543726991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42640.32258064516,
            "unit": "ns",
            "range": "± 1944.2609685708305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48003.15789473684,
            "unit": "ns",
            "range": "± 7539.180674367839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2246.590909090909,
            "unit": "ns",
            "range": "± 375.2237228844359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9532.58426966292,
            "unit": "ns",
            "range": "± 1095.0067746675938"
          }
        ]
      }
    ]
  }
}