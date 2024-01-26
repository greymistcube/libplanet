window.BENCHMARK_DATA = {
  "lastUpdate": 1706256553752,
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
          "id": "abee3c445fe3554fef83f605019dbdab639394eb",
          "message": "Prepare 4.0.2",
          "timestamp": "2024-01-26T16:47:09+09:00",
          "tree_id": "45947cb5d90cbe1550fc6fa9f09310ccc7cd8312",
          "url": "https://github.com/greymistcube/libplanet/commit/abee3c445fe3554fef83f605019dbdab639394eb"
        },
        "date": 1706256534172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7668114.05,
            "unit": "ns",
            "range": "± 168388.8029670666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19786160.388888888,
            "unit": "ns",
            "range": "± 930576.3238373796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48622207.780487806,
            "unit": "ns",
            "range": "± 1599120.518339917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96522572.2,
            "unit": "ns",
            "range": "± 1805224.8617907173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200602670.09375,
            "unit": "ns",
            "range": "± 6001874.789025299"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48554.2688172043,
            "unit": "ns",
            "range": "± 12372.46330886157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230050.44680851063,
            "unit": "ns",
            "range": "± 19440.56068133497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228302.36458333334,
            "unit": "ns",
            "range": "± 20908.067702064218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206796.47959183675,
            "unit": "ns",
            "range": "± 19688.20823303671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3956909.4285714286,
            "unit": "ns",
            "range": "± 64251.528185015886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3556630.269230769,
            "unit": "ns",
            "range": "± 48405.158988400275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15262.21875,
            "unit": "ns",
            "range": "± 2938.1429659713367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73578.46464646465,
            "unit": "ns",
            "range": "± 13657.34666936469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63567.72680412371,
            "unit": "ns",
            "range": "± 12348.588752452271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66438.18279569893,
            "unit": "ns",
            "range": "± 11259.472815624531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6098.690721649485,
            "unit": "ns",
            "range": "± 1484.4364766976444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19706.27319587629,
            "unit": "ns",
            "range": "± 4172.431479128693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1276680.4010989012,
            "unit": "ns",
            "range": "± 122588.10231385562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2753786.4787234045,
            "unit": "ns",
            "range": "± 182581.75105026292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119195.057894737,
            "unit": "ns",
            "range": "± 262307.7697506255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 24110634.708333332,
            "unit": "ns",
            "range": "± 3614520.6138487575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2942631.9464285714,
            "unit": "ns",
            "range": "± 125218.3011793868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3071121.027027027,
            "unit": "ns",
            "range": "± 152204.03355931566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3663792.6886792453,
            "unit": "ns",
            "range": "± 142690.1928267155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3771510.8947368423,
            "unit": "ns",
            "range": "± 251892.33136315062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22128835.07142857,
            "unit": "ns",
            "range": "± 2497321.081317041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5655809.231314433,
            "unit": "ns",
            "range": "± 327224.4629697145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1759402.9520733173,
            "unit": "ns",
            "range": "± 19656.292541082712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089921.0580417798,
            "unit": "ns",
            "range": "± 107462.01202311681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2756924.4912516274,
            "unit": "ns",
            "range": "± 284779.77760569117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793042.3305365115,
            "unit": "ns",
            "range": "± 75890.04917937014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 684198.8287272135,
            "unit": "ns",
            "range": "± 29847.408031891875"
          }
        ]
      }
    ]
  }
}