window.BENCHMARK_DATA = {
  "lastUpdate": 1699332585375,
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
          "id": "142e48097ebf05b86f61f397382388d721ecbd11",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T15:19:37+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/greymistcube/libplanet/commit/142e48097ebf05b86f61f397382388d721ecbd11"
        },
        "date": 1699255202114,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7996512,
            "unit": "ns",
            "range": "± 47542.91505738627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19590222.633333333,
            "unit": "ns",
            "range": "± 348805.59627757175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49113320.97058824,
            "unit": "ns",
            "range": "± 985658.1579141751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97757594.6923077,
            "unit": "ns",
            "range": "± 1510572.3468195414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196613037.2,
            "unit": "ns",
            "range": "± 3466798.7467799475"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44511.97872340425,
            "unit": "ns",
            "range": "± 8615.613167825431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220585.4255319149,
            "unit": "ns",
            "range": "± 16506.920315619835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227097.1947368421,
            "unit": "ns",
            "range": "± 18038.77250274594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218014.62371134022,
            "unit": "ns",
            "range": "± 25176.958027239296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3886133.3,
            "unit": "ns",
            "range": "± 87536.40482715268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3519687.7,
            "unit": "ns",
            "range": "± 124883.56114544954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18455.427083333332,
            "unit": "ns",
            "range": "± 4672.471589268567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81811.27551020408,
            "unit": "ns",
            "range": "± 18597.753541609418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70326.16666666667,
            "unit": "ns",
            "range": "± 17851.246502524064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83249.0612244898,
            "unit": "ns",
            "range": "± 19383.281282981527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6930.682795698925,
            "unit": "ns",
            "range": "± 1475.692018550564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16736.98979591837,
            "unit": "ns",
            "range": "± 4608.180843957457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1093687.585106383,
            "unit": "ns",
            "range": "± 119391.31644396865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2367590.4226804124,
            "unit": "ns",
            "range": "± 151896.24752893526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648545.69,
            "unit": "ns",
            "range": "± 132636.90828943392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7686767.1625,
            "unit": "ns",
            "range": "± 482536.6140552417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3025901.4523809524,
            "unit": "ns",
            "range": "± 109644.23360527412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3078031.5714285714,
            "unit": "ns",
            "range": "± 53087.95713423915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3648849.972222222,
            "unit": "ns",
            "range": "± 119089.65697885801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3568987.5773195876,
            "unit": "ns",
            "range": "± 220795.22565282043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11239981.333333334,
            "unit": "ns",
            "range": "± 1106290.419076542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4679726.012141047,
            "unit": "ns",
            "range": "± 234681.8223284929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1382121.5462582237,
            "unit": "ns",
            "range": "± 30055.364624950005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 895274.103655134,
            "unit": "ns",
            "range": "± 13318.199996034778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2129487.919340093,
            "unit": "ns",
            "range": "± 144353.12738920897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653286.0587861033,
            "unit": "ns",
            "range": "± 27978.316525380316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 601958.120954241,
            "unit": "ns",
            "range": "± 10561.673899481351"
          }
        ]
      },
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
          "id": "19c898f4ba2c7990736271b30c2c6229e0153418",
          "message": "Use Address.Bencoded instead of Address.ByteArray",
          "timestamp": "2023-11-07T13:29:59+09:00",
          "tree_id": "ea3cfcea6fe14dec7636971cca2796d673d0f37c",
          "url": "https://github.com/greymistcube/libplanet/commit/19c898f4ba2c7990736271b30c2c6229e0153418"
        },
        "date": 1699332409483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7584698.583333333,
            "unit": "ns",
            "range": "± 56525.55012712607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19048175.730769232,
            "unit": "ns",
            "range": "± 492774.66302281065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46747377.5,
            "unit": "ns",
            "range": "± 1377187.3209935667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94165337.98837209,
            "unit": "ns",
            "range": "± 3357620.018457535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193703105.23076922,
            "unit": "ns",
            "range": "± 5161050.615110085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36632.40217391304,
            "unit": "ns",
            "range": "± 5860.225651170148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234435.84210526315,
            "unit": "ns",
            "range": "± 24949.410092934908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222693.65625,
            "unit": "ns",
            "range": "± 23712.75528479096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207744.60416666666,
            "unit": "ns",
            "range": "± 24765.83001785415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3757013.2,
            "unit": "ns",
            "range": "± 68428.89749451095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3442643.6923076925,
            "unit": "ns",
            "range": "± 40513.733803869145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17867.747311827956,
            "unit": "ns",
            "range": "± 3542.448393830833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81598.58163265306,
            "unit": "ns",
            "range": "± 11894.376506259117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87687.54081632652,
            "unit": "ns",
            "range": "± 15617.384160738637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84281.66315789474,
            "unit": "ns",
            "range": "± 12697.864199374471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5974.021276595745,
            "unit": "ns",
            "range": "± 1127.2660139510574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18057.074468085106,
            "unit": "ns",
            "range": "± 3213.9538348363676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377416.7857142857,
            "unit": "ns",
            "range": "± 148965.5707554428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2690994.1086956523,
            "unit": "ns",
            "range": "± 200885.6797170561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684727.68,
            "unit": "ns",
            "range": "± 163998.572046098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7825567.419753087,
            "unit": "ns",
            "range": "± 765903.1916669342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2924909.275,
            "unit": "ns",
            "range": "± 102261.77423525836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3008073.432835821,
            "unit": "ns",
            "range": "± 139442.80478587715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3616142.1666666665,
            "unit": "ns",
            "range": "± 106272.13952516974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3523064.935483871,
            "unit": "ns",
            "range": "± 192607.47808007183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10974504.01075269,
            "unit": "ns",
            "range": "± 1010566.0629760872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5114877.76828125,
            "unit": "ns",
            "range": "± 481492.73356673506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1640982.4671875,
            "unit": "ns",
            "range": "± 29068.640180523867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1031510.2891933795,
            "unit": "ns",
            "range": "± 92398.65404590497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547710.9095052085,
            "unit": "ns",
            "range": "± 268625.8505215684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 726743.8210130774,
            "unit": "ns",
            "range": "± 66710.22860157929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 676309.5949841174,
            "unit": "ns",
            "range": "± 38176.90571293314"
          }
        ]
      },
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
          "id": "390d98ad0007bc5981330ca61d6120312d7b8164",
          "message": "Use Address.Bencoded instead of Address.ByteArray",
          "timestamp": "2023-11-07T13:34:16+09:00",
          "tree_id": "ea3cfcea6fe14dec7636971cca2796d673d0f37c",
          "url": "https://github.com/greymistcube/libplanet/commit/390d98ad0007bc5981330ca61d6120312d7b8164"
        },
        "date": 1699332569280,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7503859,
            "unit": "ns",
            "range": "± 34894.8361079401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18958126.474358976,
            "unit": "ns",
            "range": "± 656051.0449751399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50931200.09,
            "unit": "ns",
            "range": "± 3997371.5857852204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103713065.53061225,
            "unit": "ns",
            "range": "± 8255578.157834291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226332783.7,
            "unit": "ns",
            "range": "± 23675975.90250903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51653.20652173913,
            "unit": "ns",
            "range": "± 11625.177376917401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282505.0967741936,
            "unit": "ns",
            "range": "± 18582.087664728722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248263.9696969697,
            "unit": "ns",
            "range": "± 35375.405691610256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227709.43,
            "unit": "ns",
            "range": "± 31198.07208342085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4491128.1875,
            "unit": "ns",
            "range": "± 173939.0336788563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4047790.925531915,
            "unit": "ns",
            "range": "± 230722.4681780628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21116.979166666668,
            "unit": "ns",
            "range": "± 5652.163427404386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78627.76767676767,
            "unit": "ns",
            "range": "± 14669.652659124302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78154.398989899,
            "unit": "ns",
            "range": "± 18683.014018247144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88157.62244897959,
            "unit": "ns",
            "range": "± 19643.480954520885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5624.418367346939,
            "unit": "ns",
            "range": "± 2264.5123535659895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17077.9,
            "unit": "ns",
            "range": "± 3889.6597657914785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1087163.5578947368,
            "unit": "ns",
            "range": "± 108324.14236710311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2328130.75,
            "unit": "ns",
            "range": "± 175962.08646709277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1656947.530612245,
            "unit": "ns",
            "range": "± 113840.02953667671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7763063.216049382,
            "unit": "ns",
            "range": "± 536961.9970312433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2926401.285714286,
            "unit": "ns",
            "range": "± 42895.18981671591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3003504.9166666665,
            "unit": "ns",
            "range": "± 110552.87512930004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3929550.489361702,
            "unit": "ns",
            "range": "± 418430.59637348825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4160884.8606557376,
            "unit": "ns",
            "range": "± 175777.68701184582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12390148.766666668,
            "unit": "ns",
            "range": "± 1416047.696882577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4984136.570397419,
            "unit": "ns",
            "range": "± 487848.0259438248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556622.56640625,
            "unit": "ns",
            "range": "± 23065.847184557904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 993042.8604492188,
            "unit": "ns",
            "range": "± 22804.452030098317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2292181.0857263515,
            "unit": "ns",
            "range": "± 76407.34853012623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614686.8528878348,
            "unit": "ns",
            "range": "± 5778.3409709677135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558933.2077287947,
            "unit": "ns",
            "range": "± 9197.051669141809"
          }
        ]
      }
    ]
  }
}