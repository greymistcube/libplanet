window.BENCHMARK_DATA = {
  "lastUpdate": 1680265852636,
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
          "id": "eb69f758d4a8760b522726611ef3782e919b6455",
          "message": "[skip changelog] Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:41:23+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/greymistcube/libplanet/commit/eb69f758d4a8760b522726611ef3782e919b6455"
        },
        "date": 1679986517396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 118305.41237113402,
            "unit": "ns",
            "range": "± 8949.833115009018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94974.83157894737,
            "unit": "ns",
            "range": "± 10886.0555657154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199022.08333333334,
            "unit": "ns",
            "range": "± 18871.808564582403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178834.03191489363,
            "unit": "ns",
            "range": "± 15396.137375141836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3463077.076923077,
            "unit": "ns",
            "range": "± 94361.77814811381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9386019.733333332,
            "unit": "ns",
            "range": "± 151553.76847766258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15873.261363636364,
            "unit": "ns",
            "range": "± 1360.3558315290636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48984.134020618556,
            "unit": "ns",
            "range": "± 5492.648051465526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48739.46315789474,
            "unit": "ns",
            "range": "± 6333.081826528105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102262.71276595745,
            "unit": "ns",
            "range": "± 17046.283673198304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5976.393258426966,
            "unit": "ns",
            "range": "± 655.7669108133401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15507.011363636364,
            "unit": "ns",
            "range": "± 1466.1815367545585"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4787108.915364583,
            "unit": "ns",
            "range": "± 99382.68712569591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6161444.46,
            "unit": "ns",
            "range": "± 160792.2152599642"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26498552.911764707,
            "unit": "ns",
            "range": "± 839518.5567799925"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6305637.819148936,
            "unit": "ns",
            "range": "± 364011.8377926566"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28745716.861111112,
            "unit": "ns",
            "range": "± 953706.5122841558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6554687.075284091,
            "unit": "ns",
            "range": "± 157237.2136476555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903275.8442708333,
            "unit": "ns",
            "range": "± 11016.483428693064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224596.9544270833,
            "unit": "ns",
            "range": "± 9126.270444437685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618121.390885417,
            "unit": "ns",
            "range": "± 36889.41383503426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 764401.7387369792,
            "unit": "ns",
            "range": "± 4001.8677698340816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693334.5201171875,
            "unit": "ns",
            "range": "± 4464.152832732291"
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
          "id": "8902e1d814122f6a7b5c54230844e9bf49094bdf",
          "message": "Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:40:24+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/greymistcube/libplanet/commit/8902e1d814122f6a7b5c54230844e9bf49094bdf"
        },
        "date": 1679986713773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 128341.54444444444,
            "unit": "ns",
            "range": "± 10082.832477417513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 130193.68556701031,
            "unit": "ns",
            "range": "± 15979.724999804374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260824.98958333334,
            "unit": "ns",
            "range": "± 45176.59229349335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244785.52222222224,
            "unit": "ns",
            "range": "± 23324.84104608954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3724798.5161290322,
            "unit": "ns",
            "range": "± 169646.87743716376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11992193.529411765,
            "unit": "ns",
            "range": "± 486479.7797959275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17808.47311827957,
            "unit": "ns",
            "range": "± 3137.7689581286268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54870.03157894737,
            "unit": "ns",
            "range": "± 9295.67674330457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57779.01190476191,
            "unit": "ns",
            "range": "± 5078.080477622028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124640.01075268818,
            "unit": "ns",
            "range": "± 17339.179086113563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9373.794736842105,
            "unit": "ns",
            "range": "± 995.3344019878522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21790.194736842106,
            "unit": "ns",
            "range": "± 4839.932943252909"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5184251.079241072,
            "unit": "ns",
            "range": "± 374806.6593808984"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6014790.333333333,
            "unit": "ns",
            "range": "± 171373.23353621224"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30543272.17647059,
            "unit": "ns",
            "range": "± 3645397.4490262675"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7608682.274193549,
            "unit": "ns",
            "range": "± 726255.2084219152"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33040426.318181816,
            "unit": "ns",
            "range": "± 1730044.4168535527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7414289.276875,
            "unit": "ns",
            "range": "± 296628.54805659974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2115382.103125,
            "unit": "ns",
            "range": "± 89038.88227844391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331717.4533854167,
            "unit": "ns",
            "range": "± 16272.794790593636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685420.921811996,
            "unit": "ns",
            "range": "± 121175.24353007214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955740.4971354167,
            "unit": "ns",
            "range": "± 10677.242703824179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791412.6576377467,
            "unit": "ns",
            "range": "± 26744.8267489993"
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
          "id": "49f3c094e1d0a57a8415a4cae64cd85301a5ac6e",
          "message": "[skip changelog] Small fix for consistency",
          "timestamp": "2023-03-31T21:05:26+09:00",
          "tree_id": "9f83efa0860400732081f19bd366e1f1396d623b",
          "url": "https://github.com/greymistcube/libplanet/commit/49f3c094e1d0a57a8415a4cae64cd85301a5ac6e"
        },
        "date": 1680265712772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9557016.945054945,
            "unit": "ns",
            "range": "± 717450.6433525797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23816908.79292929,
            "unit": "ns",
            "range": "± 1385732.3670992076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58892803.48453608,
            "unit": "ns",
            "range": "± 4276657.374929436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121616661.35393259,
            "unit": "ns",
            "range": "± 6682548.68559638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243337932.7857143,
            "unit": "ns",
            "range": "± 6710109.319582604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85737.55681818182,
            "unit": "ns",
            "range": "± 8297.124459448898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308555.44845360826,
            "unit": "ns",
            "range": "± 66342.30377578521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304589.3,
            "unit": "ns",
            "range": "± 69836.26697674218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296958.4191919192,
            "unit": "ns",
            "range": "± 61293.614495242175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15253070.5625,
            "unit": "ns",
            "range": "± 934792.4084604214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11884319.664948454,
            "unit": "ns",
            "range": "± 821659.5904451131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32040.11797752809,
            "unit": "ns",
            "range": "± 5004.233422598805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80461.07142857143,
            "unit": "ns",
            "range": "± 18318.650453775765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76182.52272727272,
            "unit": "ns",
            "range": "± 12793.322267618982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 165697.33673469388,
            "unit": "ns",
            "range": "± 34269.98702982854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10723.285714285714,
            "unit": "ns",
            "range": "± 1020.7273363822954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29909.29069767442,
            "unit": "ns",
            "range": "± 3214.591684312897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1745395.1595744682,
            "unit": "ns",
            "range": "± 291930.52045963693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3081377.34375,
            "unit": "ns",
            "range": "± 185209.67603115342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2626645.3829787234,
            "unit": "ns",
            "range": "± 280011.78076910647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6668837.855263158,
            "unit": "ns",
            "range": "± 329874.1399158858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3669309.783505155,
            "unit": "ns",
            "range": "± 339985.02651529945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6534198.936842105,
            "unit": "ns",
            "range": "± 994320.3192886665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28930351.220930234,
            "unit": "ns",
            "range": "± 1560852.1138228038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7440161.5,
            "unit": "ns",
            "range": "± 724706.9675839213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33425011.215789475,
            "unit": "ns",
            "range": "± 2555259.2684011813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8367353.207913307,
            "unit": "ns",
            "range": "± 360122.9463965831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2340070.09140625,
            "unit": "ns",
            "range": "± 41642.486280398625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465534.2680896576,
            "unit": "ns",
            "range": "± 50951.0850843098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3417449.760725055,
            "unit": "ns",
            "range": "± 148146.7868895418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026369.4641067217,
            "unit": "ns",
            "range": "± 41064.40961929777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 874187.4910629735,
            "unit": "ns",
            "range": "± 24287.261976051275"
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
          "id": "682e2737b622acc4873a2f2ea7e182cf58a01480",
          "message": "[skip changelog] Small fix for consistency",
          "timestamp": "2023-03-31T21:07:00+09:00",
          "tree_id": "26356a172c2fea17776cc5cf1daba8b1789bffb8",
          "url": "https://github.com/greymistcube/libplanet/commit/682e2737b622acc4873a2f2ea7e182cf58a01480"
        },
        "date": 1680265834405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8189869.666666667,
            "unit": "ns",
            "range": "± 117462.38819217632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20925030.42857143,
            "unit": "ns",
            "range": "± 329895.33345446544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52449910.88888889,
            "unit": "ns",
            "range": "± 1012523.2535175581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103251028.91666667,
            "unit": "ns",
            "range": "± 1244697.3761436923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220987053.6,
            "unit": "ns",
            "range": "± 3321545.973983453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78458.57777777778,
            "unit": "ns",
            "range": "± 5892.4242335235185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 420857.66279069765,
            "unit": "ns",
            "range": "± 35284.241522947006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361939.28723404254,
            "unit": "ns",
            "range": "± 35461.331859732396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 377646.40425531915,
            "unit": "ns",
            "range": "± 59598.591634388154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6387863.886597938,
            "unit": "ns",
            "range": "± 513448.53518960555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4632653.151515151,
            "unit": "ns",
            "range": "± 419945.6790994196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25366.054347826088,
            "unit": "ns",
            "range": "± 3017.9743164970496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130383.52222222222,
            "unit": "ns",
            "range": "± 20886.773349259114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121821.53424657535,
            "unit": "ns",
            "range": "± 6062.731578812272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 283165.2083333333,
            "unit": "ns",
            "range": "± 45599.196843092395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9692,
            "unit": "ns",
            "range": "± 1770.1365113508066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20079.219101123595,
            "unit": "ns",
            "range": "± 3709.9405410230574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1628050.7828282828,
            "unit": "ns",
            "range": "± 153331.65099761327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054725.320754717,
            "unit": "ns",
            "range": "± 125860.24224859853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2589322.4623655914,
            "unit": "ns",
            "range": "± 249547.02283566236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7266526.021505376,
            "unit": "ns",
            "range": "± 444942.4201249058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3647568.8444444444,
            "unit": "ns",
            "range": "± 430677.84450060705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4231520.802083333,
            "unit": "ns",
            "range": "± 461240.5738350278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5465360.989130435,
            "unit": "ns",
            "range": "± 593002.6259028547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5190640.747311828,
            "unit": "ns",
            "range": "± 556436.1589469193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10150231.811827958,
            "unit": "ns",
            "range": "± 961695.596742771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7676396.29055851,
            "unit": "ns",
            "range": "± 495451.5435069716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2208775.142265625,
            "unit": "ns",
            "range": "± 57716.044410458206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444622.448504192,
            "unit": "ns",
            "range": "± 75880.99222098845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3041554.2239990234,
            "unit": "ns",
            "range": "± 238682.65074250087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908072.4929342831,
            "unit": "ns",
            "range": "± 25718.950060540494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890114.4168238146,
            "unit": "ns",
            "range": "± 38979.81065473723"
          }
        ]
      }
    ]
  }
}