window.BENCHMARK_DATA = {
  "lastUpdate": 1700793855309,
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
          "id": "933ada7290d7910ff4d3fa82887d22c52ab51254",
          "message": "Prepare 3.8.1",
          "timestamp": "2023-11-24T11:32:48+09:00",
          "tree_id": "45fc17974df334c07b6218760a11d9124b75b336",
          "url": "https://github.com/greymistcube/libplanet/commit/933ada7290d7910ff4d3fa82887d22c52ab51254"
        },
        "date": 1700793849212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202402.69642857142,
            "unit": "ns",
            "range": "± 8621.942048517085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194101.32857142857,
            "unit": "ns",
            "range": "± 9341.525724499756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170345.2,
            "unit": "ns",
            "range": "± 3831.095756404014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3103414.4615384615,
            "unit": "ns",
            "range": "± 20018.39037241916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2854697.6333333333,
            "unit": "ns",
            "range": "± 35481.70072398823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14707.683673469388,
            "unit": "ns",
            "range": "± 2316.70195101437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72128.23195876289,
            "unit": "ns",
            "range": "± 10410.196452392503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64551.9898989899,
            "unit": "ns",
            "range": "± 14547.148493633222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89515.75842696629,
            "unit": "ns",
            "range": "± 8163.312851811298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5210.181818181818,
            "unit": "ns",
            "range": "± 1860.075115685541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12619.365168539325,
            "unit": "ns",
            "range": "± 1464.2789971907307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3749210.415885417,
            "unit": "ns",
            "range": "± 47912.85119088715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216138.321514423,
            "unit": "ns",
            "range": "± 6958.499913562196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766701.7865397135,
            "unit": "ns",
            "range": "± 2151.272810615073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927567.8385416667,
            "unit": "ns",
            "range": "± 4808.697081470652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614256.4177433894,
            "unit": "ns",
            "range": "± 2751.378628855406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573619.2368861607,
            "unit": "ns",
            "range": "± 656.4129836092245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40730.40206185567,
            "unit": "ns",
            "range": "± 4640.248228049053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2490118.1363636362,
            "unit": "ns",
            "range": "± 52483.16106668831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501851.8985507246,
            "unit": "ns",
            "range": "± 120472.11085315981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3151609.086956522,
            "unit": "ns",
            "range": "± 76851.75749094252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2918408.02,
            "unit": "ns",
            "range": "± 97962.04192367947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6943625.053571428,
            "unit": "ns",
            "range": "± 251449.41721951446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5590674.538461538,
            "unit": "ns",
            "range": "± 92489.15738400132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14579069.933333334,
            "unit": "ns",
            "range": "± 127724.86754877603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36477020.5,
            "unit": "ns",
            "range": "± 208362.96048722288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74147708.6923077,
            "unit": "ns",
            "range": "± 277985.3778700673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150410635.34615386,
            "unit": "ns",
            "range": "± 519307.9638363036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998824.7857142857,
            "unit": "ns",
            "range": "± 117634.41260554474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1941645.8481012657,
            "unit": "ns",
            "range": "± 98592.37672408976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1400994.4175257732,
            "unit": "ns",
            "range": "± 95883.74720328324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5794034.489247312,
            "unit": "ns",
            "range": "± 354864.0768420904"
          }
        ]
      }
    ]
  }
}