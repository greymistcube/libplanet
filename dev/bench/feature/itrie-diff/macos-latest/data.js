window.BENCHMARK_DATA = {
  "lastUpdate": 1693792878885,
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
          "id": "06d288e10ab42d4c0d44ef20ef909b3ce5937896",
          "message": "Cleanup",
          "timestamp": "2023-09-04T10:42:36+09:00",
          "tree_id": "0282daa55f3754af880a2bddc6126756ea723363",
          "url": "https://github.com/greymistcube/libplanet/commit/06d288e10ab42d4c0d44ef20ef909b3ce5937896"
        },
        "date": 1693792863933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8611764.73076923,
            "unit": "ns",
            "range": "± 143603.8708120095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21661437.54054054,
            "unit": "ns",
            "range": "± 1075106.2948873965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53004090.12962963,
            "unit": "ns",
            "range": "± 2110481.766240074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102392767,
            "unit": "ns",
            "range": "± 553053.2508362797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215715507.35714287,
            "unit": "ns",
            "range": "± 3755518.3386629634"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73494.36021505376,
            "unit": "ns",
            "range": "± 4537.545718038691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334564.2272727273,
            "unit": "ns",
            "range": "± 25408.422839014314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324561.1954022989,
            "unit": "ns",
            "range": "± 27266.606062343886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312021.978021978,
            "unit": "ns",
            "range": "± 19867.6556364459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4438577.417582418,
            "unit": "ns",
            "range": "± 408001.40078918205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3784972.65,
            "unit": "ns",
            "range": "± 80583.66846313412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27538.366666666665,
            "unit": "ns",
            "range": "± 2921.53036393869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115653.89784946236,
            "unit": "ns",
            "range": "± 17499.341141100253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104250.95054945054,
            "unit": "ns",
            "range": "± 14966.897711849702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110634.73195876289,
            "unit": "ns",
            "range": "± 17310.556701713518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7899.141304347826,
            "unit": "ns",
            "range": "± 1148.7722885857124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24896.284090909092,
            "unit": "ns",
            "range": "± 3077.3292960821723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1538801.4191919193,
            "unit": "ns",
            "range": "± 186626.87594861668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2984557.9782608696,
            "unit": "ns",
            "range": "± 191209.38094049646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2108458.9784946237,
            "unit": "ns",
            "range": "± 253036.92507878292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6283273.651515151,
            "unit": "ns",
            "range": "± 727992.6778894134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3274310.5,
            "unit": "ns",
            "range": "± 59219.57396720398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3451170.073170732,
            "unit": "ns",
            "range": "± 117195.86047518706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4329771.766666667,
            "unit": "ns",
            "range": "± 73512.62957329818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3869978.695652174,
            "unit": "ns",
            "range": "± 147093.43255388082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7646947.802083333,
            "unit": "ns",
            "range": "± 686901.7335633147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5942268.58974359,
            "unit": "ns",
            "range": "± 204766.8918391252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1715870.9239676339,
            "unit": "ns",
            "range": "± 19390.547584931952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1043071.6566685268,
            "unit": "ns",
            "range": "± 12041.00184323442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656115.5145089286,
            "unit": "ns",
            "range": "± 23317.45947271121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819981.7663411458,
            "unit": "ns",
            "range": "± 12945.656244147496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724970.2307942709,
            "unit": "ns",
            "range": "± 6681.29562940039"
          }
        ]
      }
    ]
  }
}